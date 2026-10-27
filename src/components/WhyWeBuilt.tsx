import { GitBranch, GitPullRequest, Search, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

export function WhyWeBuilt() {
  return (
    <section id="why-we-built" className="scroll-mt-16 border-b border-line bg-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6.5fr)_minmax(0,5.5fr)] lg:gap-16 items-start">
          {/* Main narrative */}
          <div>
            <Reveal>
              <Eyebrow>Motivation</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[38px]">
                Why We Built devvmind
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-[18px] font-medium leading-[1.5] text-fog sm:text-[20px]">
                AI-written code merges faster than ever, but validation is the new bottleneck.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-5 space-y-4 text-[15.5px] leading-[1.75] text-mute">
                <p>
                  Engineers can see the diff in a pull request, but understanding what AI-generated code could break requires tracing untraced dependencies, checking for collisions with other open PRs, and finding critical test gaps.
                </p>
                <p>
                  We built devvmind to give engineering teams an evidence-backed governance layer before code merges &mdash; combining deterministic repository intelligence with AI reasoning to validate changes, detect collisions, and prevent production regressions.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Scannable contrast panel */}
          <Reveal delay={0.15}>
            <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-line pb-3.5">
                <span className="label-mono flex items-center gap-2 text-mute">
                  <GitPullRequest className="h-3.5 w-3.5 text-lime" />
                  PR Governance &amp; Validation
                </span>
                <span className="font-mono text-[10.5px] text-dim">Pre-merge validation</span>
              </div>

              <div className="mt-5 space-y-3.5">
                {/* Point 1 */}
                <div className="rounded-lg border border-line-2 bg-ink-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-dim">
                      The AI-generated PR
                    </span>
                    <span className="font-mono text-[10px] text-dim">Isolated diff</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                    AI generates code rapidly, but diffs lack visibility into untraced dependencies or collateral blast radius across the repository.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="rounded-lg border border-line-2 bg-ink-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-dim">
                      Validation blind spots
                    </span>
                    <span className="font-mono text-[10px] text-dim">Manual review</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                    Engineers spend hours chasing down open-PR collisions, missing tests, and tribal knowledge scattered across chat channels.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="rounded-lg border border-lime/30 bg-lime/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-lime">
                      The devvmind governance layer
                    </span>
                    <span className="font-mono text-[10px] text-lime/80">Evidence-backed merge</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-fog">
                    Analyzes dependency impact, test gaps, and downstream files, detects open-PR collisions, and delivers clear merge recommendations.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 font-mono text-[11px] text-dim">
                <span>Repository evidence + AI reasoning</span>
                <span className="text-mute">Pre-merge governance</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
