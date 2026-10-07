import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

async function prerender() {
  console.log("Starting static HTML prerendering for devvmind...");

  const distIndexHtmlPath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(distIndexHtmlPath)) {
    throw new Error(`dist/index.html not found at ${distIndexHtmlPath}. Run vite build first.`);
  }

  const rawTemplate = fs.readFileSync(distIndexHtmlPath, "utf-8");

  // Spin up Vite in SSR mode to evaluate React modules
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: "custom",
    ssr: {
      external: ["react", "react-dom", "react-dom/server"],
    },
  });

  try {
    const React = (await import("react")).default;
    const { renderToString } = await import("react-dom/server");
    const { default: App } = await vite.ssrLoadModule("./src/App.tsx");

    // 1. Prerender landing page (/)
    console.log("Rendering / (Landing Page)...");
    const landingHtml = renderToString(React.createElement(App, { path: "/" }));
    console.log(`Landing page rendered (${landingHtml.length} characters)`);

    const finalLandingHtml = rawTemplate.replace(
      '<div id="root"></div>',
      `<div id="root">${landingHtml}</div>`
    );
    fs.writeFileSync(distIndexHtmlPath, finalLandingHtml, "utf-8");
    console.log("Saved prerendered landing page to dist/index.html");

    // 2. Prerender company verification page (/company)
    console.log("Rendering /company (Company & Verification Page)...");
    const companyHtml = renderToString(React.createElement(App, { path: "/company" }));
    console.log(`Company page rendered (${companyHtml.length} characters)`);

    let finalCompanyHtml = rawTemplate
      .replace(
        "<title>devvmind — Developer Intelligence for Modern Codebases</title>",
        "<title>devvmind — Company & Verification</title>"
      )
      .replace(
        '<link rel="canonical" href="https://devvmind.me/" />',
        '<link rel="canonical" href="https://devvmind.me/company" />'
      )
      .replace(
        '<meta property="og:url" content="https://devvmind.me/" />',
        '<meta property="og:url" content="https://devvmind.me/company" />'
      )
      .replace(
        '<meta property="og:title" content="devvmind — Developer Intelligence for Modern Codebases" />',
        '<meta property="og:title" content="devvmind — Company & Verification" />'
      )
      .replace(
        '<meta name="twitter:title" content="devvmind — Developer Intelligence for Modern Codebases" />',
        '<meta name="twitter:title" content="devvmind — Company & Verification" />'
      )
      .replace(
        '<meta name="description" content="devvmind delivers developer intelligence for modern codebases, combining static analysis, dependency mapping, and Git history with Claude-powered reasoning over repository context." />',
        '<meta name="description" content="Official company background, founders, and developer intelligence platform overview for devvmind." />'
      )
      .replace(
        '<meta property="og:description" content="devvmind delivers developer intelligence for modern codebases, combining static analysis, dependency mapping, and Git history with Claude-powered reasoning over repository context." />',
        '<meta property="og:description" content="Official company background, founders, and developer intelligence platform overview for devvmind." />'
      )
      .replace(
        '<div id="root"></div>',
        `<div id="root">${companyHtml}</div>`
      );

    const companyDir = path.resolve(distDir, "company");
    if (!fs.existsSync(companyDir)) {
      fs.mkdirSync(companyDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(companyDir, "index.html"), finalCompanyHtml, "utf-8");
    console.log("Saved prerendered company page to dist/company/index.html");

    // 3. Prerender Early Access page (/early-access)
    console.log("Rendering /early-access (Early Access Page)...");
    const earlyAccessHtml = renderToString(React.createElement(App, { path: "/early-access" }));
    console.log(`Early Access page rendered (${earlyAccessHtml.length} characters)`);

    let finalEarlyAccessHtml = rawTemplate
      .replace(
        "<title>devvmind — Developer Intelligence for Modern Codebases</title>",
        "<title>devvmind — Request Early Access</title>"
      )
      .replace(
        '<link rel="canonical" href="https://devvmind.me/" />',
        '<link rel="canonical" href="https://devvmind.me/early-access" />'
      )
      .replace(
        '<meta property="og:url" content="https://devvmind.me/" />',
        '<meta property="og:url" content="https://devvmind.me/early-access" />'
      )
      .replace(
        '<meta property="og:title" content="devvmind — Developer Intelligence for Modern Codebases" />',
        '<meta property="og:title" content="devvmind — Request Early Access" />'
      )
      .replace(
        '<meta name="twitter:title" content="devvmind — Developer Intelligence for Modern Codebases" />',
        '<meta name="twitter:title" content="devvmind — Request Early Access" />'
      )
      .replace(
        '<meta name="description" content="devvmind delivers developer intelligence for modern codebases, combining static analysis, dependency mapping, and Git history with Claude-powered reasoning over repository context." />',
        '<meta name="description" content="Request early access to devvmind. Evaluating repository-scale impact analysis across real-world codebases." />'
      )
      .replace(
        '<meta property="og:description" content="devvmind delivers developer intelligence for modern codebases, combining static analysis, dependency mapping, and Git history with Claude-powered reasoning over repository context." />',
        '<meta property="og:description" content="Request early access to devvmind. Evaluating repository-scale impact analysis across real-world codebases." />'
      )
      .replace(
        '<div id="root"></div>',
        `<div id="root">${earlyAccessHtml}</div>`
      );

    const earlyAccessDir = path.resolve(distDir, "early-access");
    if (!fs.existsSync(earlyAccessDir)) {
      fs.mkdirSync(earlyAccessDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(earlyAccessDir, "index.html"), finalEarlyAccessHtml, "utf-8");
    console.log("Saved prerendered early access page to dist/early-access/index.html");

    // 4. Ensure robots.txt and sitemap.xml are in dist
    const publicRobots = path.resolve(rootDir, "public", "robots.txt");
    const distRobots = path.resolve(distDir, "robots.txt");
    if (fs.existsSync(publicRobots) && !fs.existsSync(distRobots)) {
      fs.copyFileSync(publicRobots, distRobots);
      console.log("Copied robots.txt to dist/robots.txt");
    }

    const publicSitemap = path.resolve(rootDir, "public", "sitemap.xml");
    const distSitemap = path.resolve(distDir, "sitemap.xml");
    if (fs.existsSync(publicSitemap) && !fs.existsSync(distSitemap)) {
      fs.copyFileSync(publicSitemap, distSitemap);
      console.log("Copied sitemap.xml to dist/sitemap.xml");
    }

    console.log("Static HTML prerendering completed successfully!");
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
