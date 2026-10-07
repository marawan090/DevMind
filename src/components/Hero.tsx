import { ArrowDown } from "lucide-react";
import { Reveal, PrimaryButton, SecondaryButton } from "./ui";
import { PRAnalysis } from "./PRAnalysis";

export function Hero() {
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
              <PrimaryButton href="#product">
                Explore devvmind
              </PrimaryButton>
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
        <div id="product" className="relative scroll-mt-20 pb-24 sm:pb-32">
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
        </div>
      </div>
    </section>
  );
}
