import { Resend } from "resend";

export interface EarlyAccessPayload {
  fullName: string;
  email: string;
  githubUrl: string;
  company: string;
  interest: string;
  reason?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export const ALLOWED_INTERESTS = [
  "PR Impact Analysis",
  "Codebase Intelligence",
  "Repository Analysis",
  "Other",
] as const;

export function validatePayload(body: any): ValidationResult {
  const errors: Record<string, string> = {};

  if (!body || typeof body !== "object") {
    return {
      valid: false,
      errors: { general: "Invalid request payload. Expected JSON object." },
    };
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const githubUrl = typeof body.githubUrl === "string" ? body.githubUrl.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest.trim() : "";

  // Full Name validation
  if (!fullName) {
    errors.fullName = "Full name is required";
  } else if (fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters";
  } else if (fullName.length > 100) {
    errors.fullName = "Full name must be under 100 characters";
  }

  // Work Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Work email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid work email address";
  } else if (email.length > 120) {
    errors.email = "Email must be under 120 characters";
  }

  // GitHub Profile URL validation
  if (!githubUrl) {
    errors.githubUrl = "GitHub profile URL is required";
  } else {
    const isUrl = /^https?:\/\//i.test(githubUrl);
    const hasGithub = /github\.com/i.test(githubUrl);
    // Allow https://github.com/username, github.com/username, or username
    if (isUrl && !hasGithub) {
      errors.githubUrl = "Please provide a valid GitHub profile URL (e.g. https://github.com/username)";
    }
  }

  // Company / Team validation
  if (!company) {
    errors.company = "Company or team is required";
  } else if (company.length > 120) {
    errors.company = "Company or team must be under 120 characters";
  }

  // Interest validation
  if (!interest) {
    errors.interest = "Please select what you are interested in";
  } else if (!ALLOWED_INTERESTS.includes(interest as any)) {
    errors.interest = `Please select one of the allowed options: ${ALLOWED_INTERESTS.join(", ")}`;
  }

  // Reason validation (optional)
  if (body.reason && typeof body.reason === "string" && body.reason.trim().length > 1500) {
    errors.reason = "Reason must be under 1500 characters";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function normalizeGithubUrl(input: string): string {
  const trimmed = input.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  if (/^github\.com\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return `https://github.com/${trimmed.replace(/^@/, "")}`;
}

export async function sendEarlyAccessEmail(payload: EarlyAccessPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not configured");
  }

  const toEmail = process.env.EARLY_ACCESS_TO_EMAIL || "marawan@devvmind.me";
  const fromEmail = process.env.EARLY_ACCESS_FROM_EMAIL || "info@devvmind.me";

  const resend = new Resend(apiKey);
  const normalizedGithub = normalizeGithubUrl(payload.githubUrl);

  const subject = `New devvmind Early Access Request — ${payload.fullName}`;

  const textContent = `
New devvmind Early Access Request
==================================

Full Name: ${payload.fullName}
Work Email: ${payload.email}
GitHub Profile: ${normalizedGithub}
Company / Team: ${payload.company}
Interest: ${payload.interest}

Why Early Access:
${payload.reason && payload.reason.trim() ? payload.reason.trim() : "None provided"}

----------------------------------
Submitted at: ${new Date().toISOString()}
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0b0a; color: #edeee8; padding: 32px 16px; margin: 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #121512; border: 1px solid #21251f; border-radius: 12px; overflow: hidden;">
    <!-- Header -->
    <tr>
      <td style="padding: 24px 28px; background-color: #171a16; border-bottom: 1px solid #21251f;">
        <div style="font-size: 11px; font-weight: 600; color: #a3e635; text-transform: uppercase; letter-spacing: 0.14em; font-family: ui-monospace, Menlo, Consolas, monospace;">devvmind · Early Access Intake</div>
        <h1 style="font-size: 20px; font-weight: 600; color: #edeee8; margin: 6px 0 0 0; line-height: 1.3;">New Early Access Request</h1>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <!-- Full Name -->
          <tr>
            <td style="padding-bottom: 18px;">
              <div style="font-size: 10.5px; font-weight: 600; color: #676d64; text-transform: uppercase; letter-spacing: 0.12em; font-family: ui-monospace, Menlo, Consolas, monospace;">Full Name</div>
              <div style="font-size: 16px; font-weight: 600; color: #edeee8; margin-top: 4px;">${escapeHtml(payload.fullName)}</div>
            </td>
          </tr>

          <!-- Work Email -->
          <tr>
            <td style="padding-bottom: 18px;">
              <div style="font-size: 10.5px; font-weight: 600; color: #676d64; text-transform: uppercase; letter-spacing: 0.12em; font-family: ui-monospace, Menlo, Consolas, monospace;">Work Email</div>
              <div style="font-size: 14.5px; color: #a3e635; margin-top: 4px;">
                <a href="mailto:${escapeHtml(payload.email)}" style="color: #a3e635; text-decoration: none;">${escapeHtml(payload.email)}</a>
              </div>
            </td>
          </tr>

          <!-- GitHub Profile -->
          <tr>
            <td style="padding-bottom: 18px;">
              <div style="font-size: 10.5px; font-weight: 600; color: #676d64; text-transform: uppercase; letter-spacing: 0.12em; font-family: ui-monospace, Menlo, Consolas, monospace;">GitHub Profile</div>
              <div style="font-size: 14.5px; color: #edeee8; margin-top: 4px;">
                <a href="${escapeHtml(normalizedGithub)}" target="_blank" rel="noopener noreferrer" style="color: #edeee8; text-decoration: underline; text-decoration-color: #292e27;">${escapeHtml(normalizedGithub)}</a>
              </div>
            </td>
          </tr>

          <!-- Company / Team -->
          <tr>
            <td style="padding-bottom: 18px;">
              <div style="font-size: 10.5px; font-weight: 600; color: #676d64; text-transform: uppercase; letter-spacing: 0.12em; font-family: ui-monospace, Menlo, Consolas, monospace;">Company / Team</div>
              <div style="font-size: 14.5px; color: #edeee8; margin-top: 4px;">${escapeHtml(payload.company)}</div>
            </td>
          </tr>

          <!-- Interest -->
          <tr>
            <td style="padding-bottom: 18px;">
              <div style="font-size: 10.5px; font-weight: 600; color: #676d64; text-transform: uppercase; letter-spacing: 0.12em; font-family: ui-monospace, Menlo, Consolas, monospace;">Interest Area</div>
              <div style="margin-top: 6px;">
                <span style="display: inline-block; background-color: rgba(163, 230, 53, 0.08); border: 1px solid rgba(163, 230, 53, 0.3); color: #a3e635; font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 4px; font-family: ui-monospace, Menlo, Consolas, monospace;">${escapeHtml(payload.interest)}</span>
              </div>
            </td>
          </tr>

          <!-- Why Early Access -->
          <tr>
            <td style="padding-bottom: 8px;">
              <div style="font-size: 10.5px; font-weight: 600; color: #676d64; text-transform: uppercase; letter-spacing: 0.12em; font-family: ui-monospace, Menlo, Consolas, monospace;">Why early access?</div>
              <div style="font-size: 14px; line-height: 1.6; color: #9aa096; margin-top: 6px; padding: 12px 14px; background-color: #171a16; border: 1px solid #292e27; border-radius: 6px;">
                ${payload.reason && payload.reason.trim() ? escapeHtml(payload.reason.trim()).replace(/\n/g, "<br>") : "<span style='color: #676d64; font-style: italic;'>No reason provided</span>"}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 16px 28px; background-color: #0e100e; border-top: 1px solid #21251f; font-size: 11px; color: #676d64; font-family: ui-monospace, Menlo, Consolas, monospace;">
        Timestamp: ${new Date().toISOString()} · Reply to this email to contact the applicant.
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  return await resend.emails.send({
    from: `devvmind Early Access <${fromEmail}>`,
    to: [toEmail],
    replyTo: payload.email,
    subject,
    text: textContent,
    html: htmlContent,
  });
}

/**
 * Universal Serverless / Next.js / Vercel API Route Handler
 */
export default async function handler(req: any, res: any) {
  // CORS & Preflight handling
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Method not allowed. Use POST." }));
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: "Invalid JSON in request body" }));
    }
  }

  const validation = validatePayload(body);
  if (!validation.valid) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({
      error: "Validation failed",
      errors: validation.errors,
    }));
  }

  try {
    const result = await sendEarlyAccessEmail(body);
    if (result.error) {
      console.error("Resend delivery error:", result.error);
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({
        error: "Failed to send notification email. Please check your configuration.",
        detail: result.error.message,
      }));
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({
      success: true,
      message: "Request received.",
      id: result.data?.id,
    }));
  } catch (err: any) {
    console.error("Server error handling early access request:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({
      error: "Internal server error while processing your request.",
      detail: err?.message,
    }));
  }
}
