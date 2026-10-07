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
                Small code changes can have consequences far beyond the files being edited.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-5 space-y-4 text-[15.5px] leading-[1.75] text-mute">
                <p>
                  Engineers can see what changed in a pull request, but understanding what that change could affect often requires searching through dependencies, repository history, previous changes, and unfamiliar parts of the codebase.
                </p>
                <p>
                  We built devvmind to make that context easier to understand before changes are merged — combining repository evidence, code relationships, and historical context to help engineers reason about the potential impact of their changes.
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
                  Context Before Merging
                </span>
                <span className="font-mono text-[10.5px] text-dim">Pre-merge reasoning</span>
              </div>

              <div className="mt-5 space-y-3.5">
                {/* Point 1 */}
                <div className="rounded-lg border border-line-2 bg-ink-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-dim">
                      The pull request view
                    </span>
                    <span className="font-mono text-[10px] text-dim">Isolated diff</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                    Shows which lines and files were edited, but cannot show what those changes touch across the broader repository.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="rounded-lg border border-line-2 bg-ink-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-dim">
                      The manual effort
                    </span>
                    <span className="font-mono text-[10px] text-dim">Scattered search</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                    Engineers spend valuable time digging through dependencies, past commit history, blame, and unfamiliar modules.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="rounded-lg border border-lime/30 bg-lime/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-lime">
                      The devvmind approach
                    </span>
                    <span className="font-mono text-[10px] text-lime/80">Repository evidence</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-fog">
                    Combines repository evidence, code relationships, and historical context to help engineers reason about potential impact before code is merged.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 font-mono text-[11px] text-dim">
                <span>Repository evidence + Model reasoning</span>
                <span className="text-mute">Proactive context</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
