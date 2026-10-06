import { ArrowDown, FileDiff, Layers, Waypoints } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import { cn } from "../utils/cn";

const STACK = [
  {
    name: "DevMind",
    role: "Context + Retrieval + Analysis",
    tag: "product",
    accent: true,
    icon: Layers,
  },
  {
    name: "Claude",
    role: "Reasoning + Synthesis",
    tag: "model",
    accent: false,
    icon: Waypoints,
  },
  {
    name: "DevMind",
    role: "Structured Engineering Insight",
    tag: "product",
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
              Reasoning powered by Claude. Context built by DevMind.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[56ch] text-[15.5px] leading-[1.75] text-mute">
              DevMind combines repository analysis, dependency mapping, retrieval,
              and Git history with Claude&rsquo;s reasoning capabilities. DevMind
              provides the engineering context; Claude helps synthesize it into
              clear, evidence-backed insights.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 border-l-2 border-lime/50 pl-5">
              <p className="max-w-[52ch] text-[14px] leading-[1.7] text-mute">
                The model is a component, not the product. DevMind owns everything
                that determines the quality of the answer — what gets analyzed,
                what gets retrieved, and what gets cited.
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
              DevMind handles the pipeline before and after reasoning.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
