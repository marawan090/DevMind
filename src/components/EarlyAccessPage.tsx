import { ArrowLeft, CheckCircle2, GitFork, ShieldCheck } from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Eyebrow, Reveal } from "./ui";
import { EarlyAccessForm } from "./EarlyAccessForm";

export function EarlyAccessPage() {
  return (
    <div className="min-h-screen bg-ink font-sans text-fog antialiased">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          {/* Back link */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-mute transition-colors hover:text-lime"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to devvmind home</span>
            </a>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,5.5fr)_minmax(0,6.5fr)] lg:gap-16 items-start">
            {/* Left side context */}
            <div>
              <Reveal>
                <Eyebrow index="INTAKE">Early Access</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-4 text-balance text-[34px] font-semibold tracking-[-0.025em] text-fog sm:text-[44px]">
                  Request Early Access
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-4 max-w-[50ch] text-[16px] leading-[1.7] text-mute sm:text-[17px]">
                  We're currently onboarding early users and evaluating devvmind across real-world repositories.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-8 space-y-4 rounded-xl border border-line bg-panel p-6">
                  <h2 className="font-mono text-[12px] uppercase tracking-wider text-dim">
                    What we look for during early access
                  </h2>
                  <div className="space-y-3 pt-1">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-lime/30 bg-lime/10 text-lime">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-[13.5px] leading-relaxed text-mute">
                        Engineering teams managing complex multi-module codebases where pull request impact is hard to predict.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-lime/30 bg-lime/10 text-lime">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-[13.5px] leading-relaxed text-mute">
                        Repositories with active pull request review workflows looking to surface downstream blast radius automatically.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-lime/30 bg-lime/10 text-lime">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-[13.5px] leading-relaxed text-mute">
                        Teams willing to provide direct feedback on dependency accuracy, Git retrieval, and model reasoning.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-line pt-4 font-mono text-[11px] text-dim flex items-center justify-between">
                    <span>Validation target: GitHub PRs</span>
                    <span className="text-lime">Controlled cohort</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right side form */}
            <Reveal delay={0.12}>
              <div className="rounded-xl border border-line-2 bg-panel p-6 sm:p-8 shadow-xl">
                <div className="mb-6 border-b border-line pb-4">
                  <span className="label-mono flex items-center gap-2 text-mute">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime anim-pulse-dot" />
                    Intake Form
                  </span>
                  <p className="mt-1 text-[13px] text-dim">
                    Please provide your work email and team context so we can prepare your environment.
                  </p>
                </div>
                <EarlyAccessForm />
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
