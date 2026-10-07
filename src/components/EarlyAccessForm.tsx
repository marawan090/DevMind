import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, ChevronRight, Loader2, Sparkles } from "lucide-react";
import { PrimaryButton } from "./ui";
import { cn } from "../utils/cn";

const INTEREST_OPTIONS = [
  { id: "PR Impact Analysis", label: "PR Impact Analysis", desc: "Downstream blast radius & affected flows" },
  { id: "Codebase Intelligence", label: "Codebase Intelligence", desc: "Dependency graphs & symbol relationships" },
  { id: "Repository Analysis", label: "Repository Analysis", desc: "Historical context & commit trails" },
  { id: "Other", label: "Other", desc: "Custom intelligence or exploratory workflows" },
] as const;

export interface EarlyAccessFormData {
  fullName: string;
  email: string;
  githubUrl: string;
  company: string;
  interest: string;
  reason: string;
}

export function EarlyAccessForm({
  onSuccess,
  className,
}: {
  onSuccess?: (data: EarlyAccessFormData) => void;
  className?: string;
}) {
  const [formData, setFormData] = useState<EarlyAccessFormData>({
    fullName: "",
    email: "",
    githubUrl: "",
    company: "",
    interest: "PR Impact Analysis",
    reason: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.githubUrl.trim()) {
      newErrors.githubUrl = "GitHub profile URL is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company or team name is required";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select what you are interested in";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        throw new Error(data.error || "Failed to submit early access request. Please try again.");
      }

      setSubmitSuccess(true);
      if (onSuccess) {
        onSuccess(formData);
      }
    } catch (err: any) {
      console.error("Early access submission error:", err);
      setServerError(err.message || "Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={cn("rounded-xl border border-lime/30 bg-panel p-6 sm:p-8 text-center", className)}>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-[22px] font-semibold text-fog sm:text-[24px]">
          Request received.
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-mute">
          Thanks for your interest in devvmind. We'll be in touch soon.
        </p>

        <div className="mt-6 rounded-lg border border-line-2 bg-ink-2 p-4 text-left font-mono text-[12px] space-y-1.5">
          <div className="flex justify-between border-b border-line pb-1.5">
            <span className="text-dim">Applicant:</span>
            <span className="text-fog font-medium">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-line pb-1.5 pt-1">
            <span className="text-dim">Work Email:</span>
            <span className="text-lime">{formData.email}</span>
          </div>
          <div className="flex justify-between border-b border-line pb-1.5 pt-1">
            <span className="text-dim">Company / Team:</span>
            <span className="text-fog">{formData.company}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-dim">Focus:</span>
            <span className="text-mute">{formData.interest}</span>
          </div>
        </div>

        <p className="mt-5 font-mono text-[11px] text-dim">
          We onboard teams in controlled cohorts as we validate across repositories.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("space-y-5", className)}>
      {serverError && (
        <div className="rounded-lg border border-red/40 bg-red/[0.08] p-3.5 text-[13px] text-red flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Submission failed: </span>
            <span>{serverError}</span>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="ea-fullName" className="block font-mono text-[11px] uppercase tracking-wider text-mute mb-1.5">
          Full Name <span className="text-lime">*</span>
        </label>
        <input
          id="ea-fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: "" });
          }}
          disabled={isSubmitting}
          placeholder="e.g. Alex Rivera"
          className={cn(
            "w-full rounded-md border bg-panel-2 px-3.5 py-2.5 text-[14px] text-fog placeholder:text-dim/60 focus:bg-panel-3 focus:outline-none transition-colors",
            errors.fullName ? "border-red/60 focus:border-red" : "border-line-2 focus:border-lime/60"
          )}
        />
        {errors.fullName && (
          <p className="mt-1 font-mono text-[11px] text-red flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.fullName}
          </p>
        )}
      </div>

      {/* Work Email */}
      <div>
        <label htmlFor="ea-email" className="block font-mono text-[11px] uppercase tracking-wider text-mute mb-1.5">
          Work Email <span className="text-lime">*</span>
        </label>
        <input
          id="ea-email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          disabled={isSubmitting}
          placeholder="alex@company.com"
          className={cn(
            "w-full rounded-md border bg-panel-2 px-3.5 py-2.5 text-[14px] text-fog placeholder:text-dim/60 focus:bg-panel-3 focus:outline-none transition-colors",
            errors.email ? "border-red/60 focus:border-red" : "border-line-2 focus:border-lime/60"
          )}
        />
        {errors.email && (
          <p className="mt-1 font-mono text-[11px] text-red flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.email}
          </p>
        )}
      </div>

      {/* GitHub Profile URL */}
      <div>
        <label htmlFor="ea-github" className="block font-mono text-[11px] uppercase tracking-wider text-mute mb-1.5">
          GitHub Profile URL <span className="text-lime">*</span>
        </label>
        <input
          id="ea-github"
          type="text"
          value={formData.githubUrl}
          onChange={(e) => {
            setFormData({ ...formData, githubUrl: e.target.value });
            if (errors.githubUrl) setErrors({ ...errors, githubUrl: "" });
          }}
          disabled={isSubmitting}
          placeholder="https://github.com/username"
          className={cn(
            "w-full rounded-md border bg-panel-2 px-3.5 py-2.5 text-[14px] text-fog placeholder:text-dim/60 focus:bg-panel-3 focus:outline-none transition-colors",
            errors.githubUrl ? "border-red/60 focus:border-red" : "border-line-2 focus:border-lime/60"
          )}
        />
        {errors.githubUrl && (
          <p className="mt-1 font-mono text-[11px] text-red flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.githubUrl}
          </p>
        )}
      </div>

      {/* Company / Team */}
      <div>
        <label htmlFor="ea-company" className="block font-mono text-[11px] uppercase tracking-wider text-mute mb-1.5">
          Company / Team <span className="text-lime">*</span>
        </label>
        <input
          id="ea-company"
          type="text"
          value={formData.company}
          onChange={(e) => {
            setFormData({ ...formData, company: e.target.value });
            if (errors.company) setErrors({ ...errors, company: "" });
          }}
          disabled={isSubmitting}
          placeholder="Acme Corp / Infrastructure Team"
          className={cn(
            "w-full rounded-md border bg-panel-2 px-3.5 py-2.5 text-[14px] text-fog placeholder:text-dim/60 focus:bg-panel-3 focus:outline-none transition-colors",
            errors.company ? "border-red/60 focus:border-red" : "border-line-2 focus:border-lime/60"
          )}
        />
        {errors.company && (
          <p className="mt-1 font-mono text-[11px] text-red flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.company}
          </p>
        )}
      </div>

      {/* What are you interested in? */}
      <div>
        <div className="block font-mono text-[11px] uppercase tracking-wider text-mute mb-2">
          What are you interested in? <span className="text-lime">*</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {INTEREST_OPTIONS.map((opt) => {
            const isSelected = formData.interest === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setFormData({ ...formData, interest: opt.id });
                  if (errors.interest) setErrors({ ...errors, interest: "" });
                }}
                disabled={isSubmitting}
                className={cn(
                  "flex flex-col items-start rounded-lg border p-3 text-left transition-all",
                  isSelected
                    ? "border-lime/40 bg-lime/[0.08] shadow-[0_0_12px_-4px_rgba(163,230,53,0.2)]"
                    : "border-line-2 bg-panel-2 hover:border-[#353b33] hover:bg-panel-3 text-mute"
                )}
              >
                <div className="flex w-full items-center justify-between">
                  <span className={cn("text-[13px] font-medium", isSelected ? "text-fog" : "text-mute")}>
                    {opt.label}
                  </span>
                  {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
                </div>
                <span className="mt-1 font-mono text-[10.5px] text-dim leading-snug">
                  {opt.desc}
                </span>
              </button>
            );
          })}
        </div>
        {errors.interest && (
          <p className="mt-1 font-mono text-[11px] text-red flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.interest}
          </p>
        )}
      </div>

      {/* Why would you like early access? (optional) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="ea-reason" className="font-mono text-[11px] uppercase tracking-wider text-mute">
            Why would you like early access?
          </label>
          <span className="font-mono text-[10px] text-dim">optional</span>
        </div>
        <textarea
          id="ea-reason"
          rows={3}
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          disabled={isSubmitting}
          placeholder="Tell us about your codebase, stack, or PR review bottlenecks..."
          className="w-full rounded-md border border-line-2 bg-panel-2 px-3.5 py-2.5 text-[14px] text-fog placeholder:text-dim/60 focus:border-lime/60 focus:bg-panel-3 focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          className="w-full justify-center h-11 text-[14px] font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting request...</span>
            </>
          ) : (
            <>
              <span>Request Early Access</span>
              <ChevronRight className="h-4 w-4" />
            </>
          )}
        </PrimaryButton>
      </div>

      <p className="font-mono text-[10.5px] text-center text-dim pt-1">
        No spam · Evaluated for real-world engineering teams
      </p>
    </form>
  );
}
