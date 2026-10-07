import { ArrowDown, CheckCircle2, Clock, FileDiff, Layers, Sparkles, Waypoints } from "lucide-react";
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
    name: "Claude Reasoning Layer",
    role: "Contextual Reasoning & Synthesis",
    tag: "core model",
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

const WHY_CLAUDE_STEPS = [
  {
    step: "01",
    tag: "Tested",
    title: "Tested",
    desc: "We evaluated Claude alongside open-source reasoning models during devvmind's early development.",
  },
  {
    step: "02",
    tag: "Compared",
    title: "Compared",
    desc: "We tested the models against the repository-scale reasoning and evidence-synthesis problems that matter to devvmind.",
  },
  {
    step: "03",
    tag: "Impressed",
    title: "Impressed",
    desc: "Claude produced particularly strong results for the contextual reasoning and synthesis tasks we were evaluating.",
  },
  {
    step: "04",
    tag: "Going deeper",
    title: "Going deeper",
    desc: "That experience motivated us to pursue deeper Claude integration across devvmind's core intelligence pipeline.",
  },
];

export function ClaudeRole() {
  return (
    <section id="claude" className="scroll-mt-16 border-b border-line bg-ink-2/30">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        {/* main section head & core narrative */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow index="07">Claude Integration & Reasoning</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-[20ch] text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[38px]">
                Claude as a core reasoning layer
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-5 space-y-4 max-w-[56ch] text-[15.5px] leading-[1.75] text-mute">
                <p>
                  We have already evaluated Claude with devvmind&rsquo;s repository intelligence workflows
                  alongside open-source models. The results were particularly promising for the reasoning
                  and synthesis problems at the heart of developer intelligence.
                </p>
                <p>
                  That experience is what led us to pursue deeper Claude integration. Our architecture
                  combines Claude&rsquo;s reasoning capabilities with devvmind&rsquo;s retrieval, static analysis,
                  dependency mapping, and Git intelligence so that model outputs are grounded in repository
                  evidence rather than unsupported guesses.
                </p>
                <p className="text-[14.5px] text-mute">
                  We are pursuing the Claude Startups program specifically to help expand this integration
                  across more of devvmind&rsquo;s core intelligence workflows.
                </p>
              </div>
            </Reveal>
          </div>

          {/* responsibility stack & status card */}
          <Reveal delay={0.15} className="self-center">
            <div className="overflow-hidden rounded-xl border border-line-2 bg-ink-2 p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                <span className="label-mono flex items-center gap-2 text-mute">
                  <Sparkles className="h-3.5 w-3.5 text-lime" />
                  Integration Architecture
                </span>
                <span className="font-mono text-[10px] text-dim">Context + Model Synthesis</span>
              </div>

              {STACK.map((s, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div aria-hidden="true" className="flex items-center gap-3 py-1.5">
                      <ArrowDown className="ml-[39px] h-3.5 w-3.5 text-dim" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
                        {i === 1 ? "retrieved repository context" : "structured engineering insight"}
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

              {/* status treatment */}
              <div className="mt-6 border-t border-line pt-4">
                <div className="grid gap-2.5 sm:grid-cols-2 font-mono text-[11px]">
                  <div className="flex items-center gap-2 rounded border border-line-2 bg-panel px-3 py-2 text-mute">
                    <CheckCircle2 className="h-3.5 w-3.5 text-lime shrink-0" />
                    <span>Claude evaluation — Completed</span>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-lime/30 bg-lime/[0.06] px-3 py-2 text-fog">
                    <Clock className="h-3.5 w-3.5 text-lime shrink-0 animate-pulse" />
                    <span>Deeper integration — In progress</span>
                  </div>
                </div>
                <p className="mt-3 text-center font-mono text-[10.5px] text-dim">
                  devvmind builds the context · Claude reasons over the evidence
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* explicit "plot twist" callout banner */}
        <Reveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-xl border border-lime/30 bg-panel p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="label-mono shrink-0 uppercase tracking-wider text-lime">
                Integration Rationale
              </span>
              <p className="text-[15.5px] sm:text-[16.5px] leading-[1.7] text-fog font-medium">
                &ldquo;We didn&rsquo;t start with Claude and build around it. We tested it against our existing open-source-model
                approach first. The results were strong enough to change our integration direction &mdash; and that is why
                we&rsquo;re pursuing Claude more deeply.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        {/* Why Claude section */}
        <div className="mt-16 border-t border-line pt-14">
          <Reveal>
            <div className="flex items-center justify-between">
              <div>
                <span className="label-mono text-dim">07.1 · Evaluation Journey</span>
                <h3 className="mt-2 text-[24px] font-semibold text-fog sm:text-[28px]">
                  Why Claude
                </h3>
              </div>
              <span className="hidden font-mono text-[11px] text-dim sm:inline">
                Evaluation to deeper integration
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CLAUDE_STEPS.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-panel p-5 transition-colors hover:border-line-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-dim">Step {s.step}</span>
                      <span className="rounded border border-line-2 bg-ink-2 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime">
                        {s.tag}
                      </span>
                    </div>
                    <h4 className="mt-4 text-[17px] font-semibold text-fog">{s.title}</h4>
                    <p className="mt-2.5 text-[13.5px] leading-[1.65] text-mute">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="mt-6 rounded-lg border border-line-2 bg-ink-2 px-5 py-3.5 text-center">
              <p className="font-mono text-[12px] text-mute">
                <span className="text-lime font-semibold">Claude Startups</span> is the next step in expanding that integration across devvmind&rsquo;s core intelligence workflows.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
