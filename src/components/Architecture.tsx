import { motion, useReducedMotion } from "framer-motion";
import {
  FileDiff,
  GitBranch,
  History,
  ScanLine,
  Search,
  Workflow,
} from "lucide-react";
import { GithubMark } from "./icons";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

type Row = {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  text?: string; // text-based mark (e.g., "claude")
  title: string;
  sub: string;
  accent?: boolean;
};

type Group = {
  rail: string;
  tone: "lime" | "neutral" | "dim";
  rows: Row[];
};

const GROUPS: Group[] = [
  {
    rail: "input",
    tone: "dim",
    rows: [{ icon: GithubMark, title: "GitHub Repository", sub: "source of truth for the change" }],
  },
  {
    rail: "devvmind — context layer",
    tone: "lime",
    rows: [
      { icon: ScanLine, title: "Repository Ingestion", sub: "files, modules, symbols" },
      { icon: Workflow, title: "Code Structure + Dependency Analysis", sub: "who imports what, and how far it reaches", accent: true },
      { icon: History, title: "Git History + PR Context", sub: "commits, blame, related pull requests", accent: true },
      { icon: Search, title: "Context Retrieval", sub: "the evidence set for this pull request", accent: true },
    ],
  },
  {
    rail: "reasoning layer — evaluating Claude",
    tone: "neutral",
    rows: [{ text: "reasoning", title: "Reasoning & Synthesis Layer", sub: "reasons across retrieved context — evaluating Claude" }],
  },
  {
    rail: "devvmind — output",
    tone: "lime",
    rows: [{ icon: FileDiff, title: "Evidence-backed PR Analysis", sub: "impact, risk, reviewers, and cited sources", accent: true }],
  },
  {
    rail: "delivery",
    tone: "dim",
    rows: [{ icon: GitBranch, title: "GitHub Pull Request", sub: "surfaced where the team already reviews" }],
  },
];

const RAIL_TONE = {
  lime: "border-lime/30 text-lime/80",
  neutral: "border-[#3d453a] text-mute",
  dim: "border-line text-dim",
};

function FlowRows({ groups }: { groups: Group[] }) {
  const reduced = useReducedMotion();
  let rowIndex = 0;
  const total = groups.reduce((n, g) => n + g.rows.length, 0);

  return (
    <div>
      {groups.map((g, gi) => (
        <div key={g.rail + gi} className="relative">
          {/* connector between groups */}
          {gi > 0 && (
            <motion.span
              aria-hidden="true"
              initial={reduced ? { opacity: 0 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="block h-6 w-px origin-top bg-line-2 ml-[30px] md:ml-[202px]"
            />
          )}

          <div className="md:grid md:grid-cols-[156px_minmax(0,1fr)] md:gap-4">
            {/* group rail */}
            <div className="mb-2 flex md:mb-0">
              <div
                className={cn(
                  "flex w-full items-center rounded-md border-l-2 bg-panel/50 px-3 py-1.5 md:bg-transparent md:py-0",
                  RAIL_TONE[g.tone]
                )}
              >
                <span className="label-mono text-[9px] leading-[1.6]">{g.rail}</span>
              </div>
            </div>

            {/* rows */}
            <div>
              {g.rows.map((r, ri) => {
                const idx = rowIndex++;
                return (
                  <div key={r.title} className="relative">
                    {ri > 0 && (
                      <motion.span
                        aria-hidden="true"
                        initial={reduced ? { opacity: 0 } : { scaleY: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 0.45, delay: 0.15 + idx * 0.05 }}
                        className="block h-5 w-px origin-top bg-line-2 ml-[30px]"
                      />
                    )}
                    <motion.div
                      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ duration: 0.55, delay: 0.12 + idx * 0.07, ease: [0.21, 0.65, 0.2, 1] }}
                      className={cn(
                        "flex h-[60px] items-center gap-3 rounded-lg border px-3 transition-colors",
                        g.tone === "neutral"
                          ? "border-line-2 bg-panel-2"
                          : "border-line bg-panel hover:border-line-2"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border",
                          g.tone === "neutral" ? "border-line-2 bg-ink-2" : "border-line-2 bg-panel-2"
                        )}
                      >
                        {r.icon ? (
                          <r.icon
                            className={cn("h-4 w-4", r.accent ? "text-lime" : "text-mute")}
                            strokeWidth={1.8}
                          />
                        ) : (
                          <span className="font-mono text-[8px] font-semibold tracking-wide text-fog">
                            {r.text}
                          </span>
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-mono text-[12.5px] font-medium text-fog">
                          {r.title}
                        </div>
                        <div className="mt-0.5 truncate font-mono text-[10.5px] text-dim">{r.sub}</div>
                      </div>
                      <span className="hidden font-mono text-[9.5px] text-dim sm:inline">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
      <span className="hidden" aria-hidden="true">{total}</span>
    </div>
  );
}

export function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Architecture"
              index="03"
              title="The pipeline behind every analysis."
              lede="Each pull request follows a structured pipeline: devvmind extracts code structure, dependencies, and Git history into verified context, which is then synthesized by the reasoning layer into actionable insights."
            />
            <Reveal delay={0.24}>
              <p className="mt-6 border-t border-line pt-5 font-mono text-[11px] leading-relaxed text-dim">
                the loop is closed: input and output both live in your GitHub
                repository.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-xl border border-line-2 bg-ink-2 p-4 sm:p-6">
                <FlowRows groups={GROUPS} />
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 text-center text-[15px] text-mute">
                <span className="font-semibold text-fog">devvmind builds the engineering context.</span>{" "}
                <span className="font-semibold text-lime">The reasoning layer interprets that context into actionable insights.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
