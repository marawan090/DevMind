import { motion, useReducedMotion } from "framer-motion";
import { GitCommitHorizontal, GitPullRequest, Users2 } from "lucide-react";
import { Avatar, Reveal, SectionHead } from "./ui";

const SIGNALS = [
  {
    icon: GitCommitHorizontal,
    title: "Commit recency in the affected paths",
    body: "who has been changing auth/* and session/* most recently",
  },
  {
    icon: GitPullRequest,
    title: "Review history on related pull requests",
    body: "who reviewed the last change to the same flow",
  },
  {
    icon: Users2,
    title: "Blame coverage on the touched files",
    body: "who holds the context behind the lines being changed",
  },
];

const RANKED = [
  {
    ini: "AK",
    name: "Ahmed",
    role: "Recent contributor",
    reason: "Active contributor to auth/middleware.ts",
    meta: ["8 commits in path", "last touched 9 days ago"],
  },
  {
    ini: "SL",
    name: "Sarah",
    role: "Reviewed related PR",
    reason: "Approved related PR #87 ('Consolidate session handling')",
    meta: ["session handling context", "merged 2 months ago"],
  },
  {
    ini: "MT",
    name: "Marcus",
    role: "Module author",
    reason: "Original author of session/service.ts implementation",
    meta: ["author of session service", "active in domain"],
  },
];

function ReviewerPanel() {
  const reduced = useReducedMotion();
  return (
    <div className="overflow-hidden rounded-xl border border-line-2 bg-panel">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="label-mono flex items-center gap-2 text-mute">
          <Users2 className="h-3.5 w-3.5 text-lime" />
          Suggested reviewers · auth/*
        </span>
        <span className="rounded border border-line-2 px-1.5 py-px font-mono text-[9.5px] text-dim">
          PR #142
        </span>
      </div>

      <div className="divide-y divide-line/60">
        {RANKED.map((r, i) => (
          <motion.div
            key={r.name}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.12, ease: "easeOut" }}
            className="px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <Avatar initials={r.ini} i={i} className="h-[26px] w-[26px] text-[10px]" />
              <span className="text-[14px] font-semibold text-fog">{r.name}</span>
              <span className="rounded border border-lime/25 bg-lime/[0.06] px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-lime">
                {r.role}
              </span>
            </div>
            <div className="mt-2 text-[12.5px] text-mute">{r.reason}</div>
            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
              {r.meta.map((m) => (
                <span key={m} className="font-mono text-[10px] text-dim">{m}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-line bg-panel-2/60 px-5 py-3">
        <p className="font-mono text-[10.5px] leading-relaxed text-dim">
          derived from Git history — commits, reviews, and blame in the affected
          paths · <span className="text-mute">Illustrative example · Demo data</span>
        </p>
      </div>
    </div>
  );
}

export function Reviewers() {
  return (
    <section className="border-b border-line bg-ink-2/40">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-6 md:py-32 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <SectionHead
            eyebrow="Capability 03 · Reviewer intelligence"
            index="06"
            title="Suggested reviewers, grounded in history."
            lede="Surface contributors and reviewers with relevant history around the affected parts of the codebase."
          />
          <div className="mt-9 border-t border-line">
            {SIGNALS.map((s, i) => (
              <Reveal key={s.title} delay={0.15 + i * 0.09}>
                <div className="flex gap-3.5 border-b border-line py-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line-2 bg-panel-2">
                    <s.icon className="h-3.5 w-3.5 text-lime" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-semibold text-fog">{s.title}</h3>
                    <p className="mt-1 font-mono text-[11px] leading-relaxed text-dim">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="mt-6 text-[13px] leading-relaxed text-mute">
              Suggestions come from evidence, not ownership files — every
              recommendation cites the commits or reviews behind it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="self-center">
          <ReviewerPanel />
        </Reveal>
      </div>
    </section>
  );
}
