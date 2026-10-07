import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal, PrimaryButton, SecondaryButton } from "./ui";
import { PRAnalysis } from "./PRAnalysis";

export function Hero({
  onRequestEarlyAccess,
}: {
  onRequestEarlyAccess?: () => void;
}) {
  const handleEarlyAccessClick = (e: React.MouseEvent) => {
    if (onRequestEarlyAccess) {
      e.preventDefault();
      onRequestEarlyAccess();
    }
  };

  return (
    <section id="top" className="relative overflow-hidden pt-14">
      {/* faint blueprint grid, masked to the top of the page */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[760px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_28%,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6">
        <div className="pb-16 pt-18 sm:pt-24 md:pb-20 lg:max-w-[840px]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
              <span className="label-mono text-mute">Developer intelligence for modern codebases</span>
              <span className="hidden font-mono text-[11px] text-dim sm:inline">·</span>
              <span className="hidden font-mono text-[11px] text-dim sm:inline">Context by devvmind · Reasoning layer</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-[16ch] text-balance text-[42px] font-semibold leading-[1.06] tracking-[-0.025em] text-fog sm:text-[56px] md:text-[64px]">
              Understand the codebase before you change it.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.7] text-mute sm:text-[18px]">
              devvmind helps engineers understand repository structure, code relationships,
              history, and the potential impact of changes — combining deep codebase context
              with advanced model reasoning before modifying or merging code.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <PrimaryButton
                href="/early-access"
                onClick={handleEarlyAccessClick}
                className="h-11 px-5 text-[14px]"
              >
                Request Early Access
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href="#product">
                Explore devvmind
              </SecondaryButton>
              <SecondaryButton href="#how-it-works">
                See How It Works
                <ArrowDown className="h-3.5 w-3.5" />
              </SecondaryButton>
            </div>
            <div className="mt-6 flex items-center gap-2.5 font-mono text-[12px] text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              <span>Built with repository intelligence and AI reasoning &mdash; with Claude evaluated as a key reasoning layer.</span>
            </div>
          </Reveal>
        </div>

        {/* product showcase */}
        <div id="product" className="relative scroll-mt-20 pb-20 sm:pb-28">
          <Reveal>
            <div className="mb-4 flex items-center justify-between">
              <span className="label-mono flex items-center gap-2.5 text-mute">
                <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
                Product preview
              </span>
              <span className="font-mono text-[10.5px] text-dim">
                Illustrative example
              </span>
            </div>
          </Reveal>
          <PRAnalysis />
          <Reveal delay={0.2}>
            <div className="mx-auto mt-8 flex items-center justify-center gap-3 font-mono text-[12px] text-dim">
              <span className="text-mute">Code</span>
              <span className="text-lime">→</span>
              <span className="text-mute">Context</span>
              <span className="text-lime">→</span>
              <span className="text-mute">Impact</span>
            </div>
          </Reveal>

          {/* secondary CTA below the product/demo section */}
          <Reveal delay={0.25}>
            <div className="mt-14 rounded-xl border border-line bg-panel p-6 sm:p-8 md:p-10 transition-colors hover:border-line-2">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-[62ch]">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-lime mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime anim-pulse-dot" />
                    Early Access Evaluation
                  </div>
                  <h3 className="text-[20px] font-semibold text-fog sm:text-[23px] tracking-[-0.01em]">
                    Want to try devvmind on your codebase?
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-mute">
                    We're currently onboarding early users and evaluating devvmind across real-world repositories.
                  </p>
                </div>
                <PrimaryButton
                  href="/early-access"
                  onClick={handleEarlyAccessClick}
                  className="shrink-0 h-11 px-5 text-[14px]"
                >
                  Request Early Access
                  <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
