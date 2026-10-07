import { Activity, Binary, FlaskConical, GitFork, Lock, Search } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

export function ProductStatus() {
  return (
    <section id="status" className="scroll-mt-16 border-b border-line bg-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6.5fr)_minmax(0,5.5fr)] lg:gap-16 items-start">
          {/* Main messaging */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                <span className="label-mono text-mute">Product Status</span>
                <span className="rounded border border-lime/30 bg-lime/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime">
                  Internal Evaluation
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[38px]">
                Early Development & Evaluation
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 space-y-4 text-[15.5px] leading-[1.75] text-mute">
                <p>
                  devvmind is currently in active development. We are validating repository-scale impact analysis and evidence-backed reasoning through internal testing across real-world open-source GitHub repositories.
                </p>
                <p>
                  We are currently focused on improving the accuracy of dependency impact analysis, historical context retrieval, and evidence-backed reasoning before opening devvmind to external users.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-dim">
                <span className="flex items-center gap-1.5 rounded border border-line-2 bg-panel px-2.5 py-1">
                  <GitFork className="h-3 w-3 text-lime" />
                  Testing on open-source repos
                </span>
                <span className="flex items-center gap-1.5 rounded border border-line-2 bg-panel px-2.5 py-1">
                  <Lock className="h-3 w-3 text-dim" />
                  Internal testing stage
                </span>
                <span className="flex items-center gap-1.5 rounded border border-line-2 bg-panel px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  Not yet open to external users
                </span>
              </div>
            </Reveal>
          </div>

          {/* Technical focus areas card */}
          <Reveal delay={0.15}>
            <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-line pb-3.5">
                <span className="label-mono flex items-center gap-2 text-mute">
                  <Activity className="h-3.5 w-3.5 text-lime" />
                  Current Focus & Validation
                </span>
                <span className="font-mono text-[10.5px] text-dim">Internal Milestones</span>
              </div>

              <div className="mt-5 space-y-3.5">
                <div className="rounded-lg border border-line-2 bg-ink-2 p-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line-2 bg-panel-2">
                      <Binary className="h-3.5 w-3.5 text-lime" />
                    </span>
                    <span className="text-[13.5px] font-semibold text-fog">
                      Dependency Impact Analysis
                    </span>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-mute">
                    Improving the precision of static dependency mapping, symbol call graphs, and downstream blast-radius calculations.
                  </p>
                </div>

                <div className="rounded-lg border border-line-2 bg-ink-2 p-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line-2 bg-panel-2">
                      <Search className="h-3.5 w-3.5 text-lime" />
                    </span>
                    <span className="text-[13.5px] font-semibold text-fog">
                      Historical Context Retrieval
                    </span>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-mute">
                    Refining the retrieval of relevant commits, historical pull requests, and Git blame trails across repository history.
                  </p>
                </div>

                <div className="rounded-lg border border-line-2 bg-ink-2 p-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line-2 bg-panel-2">
                      <FlaskConical className="h-3.5 w-3.5 text-lime" />
                    </span>
                    <span className="text-[13.5px] font-semibold text-fog">
                      Evidence-Backed Reasoning
                    </span>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-mute">
                    Validating model reasoning across assembled repository context before making devvmind available externally.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 font-mono text-[11px] text-dim">
                <span>Evaluation phase</span>
                <span className="text-lime">Pre-release engineering</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
