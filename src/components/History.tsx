import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileDiff, GitCommitHorizontal, Layers, Users2 } from "lucide-react";
import { Avatar, Reveal, SectionHead, Eyebrow } from "./ui";
import { cn } from "../utils/cn";

type Commit = {
  date: string;
  hash: string;
  title: string;
  author: string;
  who: string[];
  add: number;
  del: number;
  modules: string[];
  why: string;
  reach: string;
};

const COMMITS: Commit[] = [
  {
    date: "Sep 24",
    hash: "c8f2e11",
    title: "Improve repository synchronization",
    author: "AK",
    who: ["AK", "MT"],
    add: 412,
    del: 187,
    modules: ["services/sync.ts", "services/ingestion.ts"],
    why: "Incremental analysis replaced full re-indexing. Sync now replays only the files touched by a push.",
    reach: "44% of current files reference modules changed here",
  },
  {
    date: "Sep 19",
    hash: "3b9a04f",
    title: "Refactor authentication flow",
    author: "JW",
    who: ["JW", "SL", "AK"],
    add: 238,
    del: 764,
    modules: ["auth/session.ts", "middleware/auth.ts"],
    why: "Session handling consolidated into auth/session.ts after three parallel implementations drifted apart.",
    reach: "every authenticated request still passes through this change",
  },
  {
    date: "Sep 12",
    hash: "91dd3c8",
    title: "Add repository integration",
    author: "MT",
    who: ["MT", "AK"],
    add: 1842,
    del: 96,
    modules: ["api/repositories.ts", "services/ingestion.ts", "db/schema.ts"],
    why: "Introduced the repository read model — the boundary everything else in the product builds on.",
    reach: "6 of 8 top-level modules trace back to this commit",
  },
  {
    date: "Aug 31",
    hash: "f0a72b1",
    title: "Initial architecture",
    author: "AK",
    who: ["AK"],
    add: 4120,
    del: 0,
    modules: ["Application"],
    why: "Defined the four top-level modules — app, api, services, db. The shape has survived 214 commits unchanged.",
    reach: "defines the module boundaries used across the codebase",
  },
];


export function History() {
  const [sel, setSel] = useState(1);
  const c = COMMITS[sel];

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 py-24 sm:px-6 md:py-32 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        {/* left: timeline */}
        <div>
          <SectionHead
            eyebrow="Capability 02 · Historical context"
            index="05"
            title="Every change has a trail."
            lede="Connect code changes with relevant commits, Git blame, previous pull requests, and repository history."
          />

          <div className="relative mt-12">
            <span aria-hidden="true" className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />
            <ol className="flex flex-col">
              {COMMITS.map((cm, i) => (
                <Reveal key={cm.hash} delay={i * 0.08}>
                  <li>
                    <button
                      onMouseEnter={() => setSel(i)}
                      onFocus={() => setSel(i)}
                      onClick={() => setSel(i)}
                      aria-pressed={sel === i}
                      className={cn(
                        "group relative flex w-full flex-col gap-2 rounded-lg border px-5 py-4 pl-9 text-left transition-colors duration-200 sm:flex-row sm:items-center sm:gap-5",
                        sel === i
                          ? "border-line-2 bg-panel"
                          : "border-transparent hover:bg-panel/60"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 transition-colors",
                          sel === i ? "border-lime bg-ink" : "border-[#2b302a] bg-ink group-hover:border-[#3a4038]"
                        )}
                      />
                      <span className="w-[86px] shrink-0 font-mono text-[11px] text-dim">{cm.date}</span>
                      <span className="min-w-0 flex-1">
                        <span className={cn("block truncate text-[14.5px] font-medium transition-colors", sel === i ? "text-fog" : "text-mute group-hover:text-fog")}>
                          {cm.title}
                        </span>
                        <span className="mt-1 block font-mono text-[10.5px] text-dim">
                          {cm.hash} · {cm.modules[0]}
                        </span>
                      </span>
                    </button>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* right: commit inspector */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={0.15}>
            <Eyebrow>Illustrative example · Demo data</Eyebrow>
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.div
              key={c.hash}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-4 overflow-hidden rounded-xl border border-line-2 bg-panel"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="flex items-center gap-2 font-mono text-[11px] text-dim">
                  <GitCommitHorizontal className="h-3.5 w-3.5 text-lime" />
                  {c.hash}
                </span>
                <span className="font-mono text-[11px] text-dim">{c.date}, 2026</span>
              </div>

              <div className="px-5 py-4">
                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-fog">{c.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-mute">{c.why}</p>

                <div className="mt-5 flex items-center gap-2 rounded-md border border-lime/20 bg-lime/[0.05] px-3 py-2.5">
                  <Layers className="h-3.5 w-3.5 shrink-0 text-lime" />
                  <p className="font-mono text-[11px] leading-snug text-mute">{c.reach}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px border-t border-line bg-line">
                <div className="bg-panel px-5 py-3.5">
                  <div className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wider text-dim">
                    <Users2 className="h-3 w-3" /> Contributors
                  </div>
                  <div className="mt-2 flex items-center">
                    {c.who.map((w, i) => (
                      <Avatar key={w} initials={w} i={i + 1} className={i > 0 ? "-ml-1.5" : ""} />
                    ))}
                    <span className="ml-2 font-mono text-[10.5px] text-dim">{c.who.length}</span>
                  </div>
                </div>
                <div className="bg-panel px-5 py-3.5">
                  <div className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wider text-dim">
                    <FileDiff className="h-3 w-3" /> Impact Scope
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-mute">
                    {c.modules.length} related modules
                  </div>
                </div>
              </div>

              <div className="border-t border-line px-5 py-3.5">
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-dim">Related modules</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.modules.map((m) => (
                    <span key={m} className="rounded border border-line-2 px-2 py-1 font-mono text-[10.5px] text-mute">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
