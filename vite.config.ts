import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function earlyAccessApiPlugin(): Plugin {
  return {
    name: "early-access-api",
    configureServer(server) {
      server.middlewares.use("/api/early-access", async (req, res, next) => {
        if (req.method === "POST" || req.method === "OPTIONS") {
          const { default: handler } = await import("./api/early-access.ts");
          let rawBody = "";
          for await (const chunk of req) {
            rawBody += chunk;
          }
          (req as any).body = rawBody;
          return handler(req, res);
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api/early-access", async (req, res, next) => {
        if (req.method === "POST" || req.method === "OPTIONS") {
          const { default: handler } = await import("./api/early-access.ts");
          let rawBody = "";
          for await (const chunk of req) {
            rawBody += chunk;
          }
          (req as any).body = rawBody;
          return handler(req, res);
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  if (env.RESEND_API_KEY && !process.env.RESEND_API_KEY) {
    process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  }
  if (env.EARLY_ACCESS_TO_EMAIL && !process.env.EARLY_ACCESS_TO_EMAIL) {
    process.env.EARLY_ACCESS_TO_EMAIL = env.EARLY_ACCESS_TO_EMAIL;
  }
  if (env.EARLY_ACCESS_FROM_EMAIL && !process.env.EARLY_ACCESS_FROM_EMAIL) {
    process.env.EARLY_ACCESS_FROM_EMAIL = env.EARLY_ACCESS_FROM_EMAIL;
  }

  return {
    plugins: [react(), tailwindcss(), viteSingleFile(), earlyAccessApiPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
