import { ArrowDown, FileDiff, Layers, Waypoints } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import { cn } from "../utils/cn";

const STACK = [
  {
    name: "devvmind Context Layer",
    role: "Repository Structure · Static Analysis · Git History",
    tag: "evidence",
    accent: true,
    icon: Layers,
  },
  {
    name: "Reasoning Layer (Target: Claude)",
    role: "Contextual Reasoning & Synthesis",
    tag: "intended model",
    accent: false,
    icon: Waypoints,
  },
  {
    name: "devvmind Engineering Insight",
    role: "Structured Impact, Risk, & Review Guidance",
    tag: "output",
    accent: true,
    icon: FileDiff,
  },
];

export function ClaudeRole() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-6 md:py-32 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow index="07">Reasoning layer</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-[20ch] text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[36px]">
              Claude as the target reasoning layer
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-5 space-y-3.5 max-w-[56ch] text-[15.5px] leading-[1.75] text-mute">
              <p>
                devvmind is currently prototyping its reasoning layer with open-source models,
                with Claude as the target reasoning and synthesis layer to be evaluated for
                repository-scale code intelligence.
              </p>
              <p className="text-[14.5px]">
                The architecture is model-agnostic. devvmind itself builds and owns the engineering
                context — including repository structure, static code analysis, dependency relationships,
                deterministic retrieval, Git history, and code-change diffs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 border-l-2 border-lime/50 pl-5">
              <p className="max-w-[52ch] text-[14px] leading-[1.7] text-mute">
                devvmind builds the engineering context. The reasoning layer interprets that context.
                Rather than generating generic text, the model operates strictly over verified repository
                facts, dependency paths, and code history to evaluate the true impact of changes.
              </p>
            </div>
          </Reveal>
        </div>

        {/* responsibility stack */}
        <Reveal delay={0.15} className="self-center">
          <div className="overflow-hidden rounded-xl border border-line-2 bg-ink-2 p-5 sm:p-6">
            {STACK.map((s, i) => (
              <div key={i}>
                {i > 0 && (
                  <div aria-hidden="true" className="flex items-center gap-3 py-1.5">
                    <ArrowDown className="ml-[39px] h-3.5 w-3.5 text-dim" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
                      {i === 1 ? "retrieved context" : "structured output"}
                    </span>
                  </div>
                )}
                <div
                  className={cn(
                    "flex items-center gap-3.5 rounded-lg border px-4 py-4",
                    s.accent
                      ? "border-lime/25 bg-panel"
                      : "border-line-2 bg-panel-2"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-md border",
                      s.accent ? "border-lime/25 bg-lime/10" : "border-line-2 bg-ink"
                    )}
                  >
                    {s.accent ? (
                      <s.icon className="h-4.5 w-4.5 text-lime" strokeWidth={1.9} />
                    ) : (
                      <span className="font-mono text-[9px] font-semibold tracking-wide text-fog">claude</span>
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold text-fog">{s.name}</div>
                    <div className="mt-0.5 font-mono text-[11px] text-mute">{s.role}</div>
                  </div>
                  <span className="rounded border border-line-2 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-dim">
                    {s.tag}
                  </span>
                </div>
              </div>
            ))}
            <p className="mt-5 text-center font-mono text-[10.5px] leading-relaxed text-dim">
              devvmind builds the context · Planned reasoning layer to be evaluated with Claude
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
