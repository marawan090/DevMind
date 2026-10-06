import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, FolderSearch, Layers, Waypoints } from "lucide-react";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

type Stage = {
  n: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
  chips: string[];
  note: string;
  accent?: boolean;
  tag?: string;
};

const STAGES: Stage[] = [
  {
    n: "01",
    icon: FolderSearch,
    title: "Code & Structure",
    body: "devvmind maps the repository structure, code relationships, symbols, and import graphs.",
    chips: ["topology", "imports", "symbols"],
    note: "Full structural snapshot of the codebase",
  },
  {
    n: "02",
    icon: Layers,
    title: "Context Retrieval",
    body: "Deterministic retrieval identifies affected components, dependencies, Git history, and related pull requests.",
    chips: ["dependencies", "git history", "related PRs"],
    note: "All relevant engineering context is assembled",
  },
  {
    n: "03",
    icon: Waypoints,
    title: "Impact Synthesis",
    body: "Claude reasons over the assembled context to produce structured, evidence-backed PR intelligence.",
    chips: ["blast radius", "reviewers", "citations"],
    note: "Every insight cites the exact files and commits it came from",
    accent: true,
    tag: "claude",
  },
];

function Connector({ vertical, label }: { vertical?: boolean; label?: string }) {
  const reduced = useReducedMotion();
  if (vertical) {
    return (
      <span aria-hidden="true" className="absolute -bottom-[28px] left-1/2 flex h-[28px] -translate-x-1/2 flex-col items-center lg:hidden">
        <motion.span
          initial={reduced ? { opacity: 0 } : { scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="h-full w-px origin-top bg-line-2"
        />
      </span>
    );
  }
  return (
    <span aria-hidden="true" className="absolute -right-[28px] top-1/2 hidden w-[28px] -translate-y-1/2 lg:block">
      {label && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8.5px] uppercase tracking-[0.12em] text-dim">
          {label}
        </span>
      )}
      <motion.span
        initial={reduced ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
        className="flex h-px w-full origin-left items-center bg-line-2"
      >
        <ChevronRight className="ml-auto -mr-1 h-3 w-3 text-dim" />
      </motion.span>
    </span>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-line bg-ink-2/40">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <SectionHead
          eyebrow="How devvmind works"
          index="02"
          title="From repository context to actionable reasoning."
          lede="Three stages, in strict order: devvmind maps the repository structure, retrieves relevant historical context, and synthesizes evidence-backed PR intelligence."
        />

        <div className="relative mt-14 grid gap-[56px] lg:grid-cols-3 lg:gap-[28px]">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="relative">
              {i < STAGES.length - 1 && (
                <>
                  <Connector label={["repo map", "retrieved context"][i]} />
                  <Connector vertical />
                </>
              )}
              <div
                className={cn(
                  "group relative flex h-full flex-col rounded-lg border bg-panel p-5 transition-colors duration-300",
                  s.accent ? "border-lime/25 hover:border-lime/40" : "border-line hover:border-line-2"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("flex h-8 w-8 items-center justify-center rounded-md border", s.accent ? "border-lime/25 bg-lime/10" : "border-line-2 bg-panel-2")}>
                    <s.icon className={cn("h-4 w-4", s.accent ? "text-lime" : "text-mute")} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[10.5px] text-dim">stage {s.n}</span>
                </div>

                <h3 className="mt-4 flex items-center gap-2 text-[15px] font-semibold tracking-[-0.01em] text-fog">
                  {s.title}
                  {s.tag && (
                    <span className="rounded border border-lime/25 bg-lime/[0.07] px-1.5 py-px font-mono text-[9px] font-medium uppercase tracking-wider text-lime">
                      {s.tag}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-mute">{s.body}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className={cn(
                        "rounded border px-1.5 py-[3px] font-mono text-[10px]",
                        s.accent ? "border-lime/20 text-lime/90" : "border-line-2 text-mute"
                      )}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <p className="mt-4 border-t border-line pt-3 text-[12px] leading-relaxed text-dim">
                  {s.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-start gap-3 rounded-lg border border-line bg-panel px-5 py-4 sm:flex-row sm:items-center">
            <span className="flex items-center gap-2.5">
              <Waypoints className="h-4 w-4 text-lime" />
              <span className="text-[15px] font-medium text-fog">
                One structured, evidence-backed analysis per pull request.
              </span>
            </span>
            <span className="hidden flex-1 border-t border-dashed border-line-2 sm:block" aria-hidden="true" />
            <span className="font-mono text-[10.5px] text-dim">
              output: <span className="text-mute">PR analysis · surfaced where the team reviews</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
