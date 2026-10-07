import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FileCode2, Gauge, ShieldAlert, Siren } from "lucide-react";
import { Avatar, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

/* ============================= scenarios ============================= */

type Dep = { label: string; badge: string; affected: boolean; via?: string };
type Scenario = {
  file: string;
  module: string;
  deps: Dep[];
  impact: { modules: number; routes: number; surfaces: number };
  scope: string;
  reviewers: string[];
};

const SCENARIOS: Scenario[] = [
  {
    file: "auth/session.ts",
    module: "Authentication",
    deps: [
      { label: "middleware/auth.ts", badge: "middleware", affected: true },
      { label: "api/user.ts", badge: "api route", affected: true },
      { label: "dashboard/page.tsx", badge: "ui surface", affected: true, via: "via middleware/auth.ts" },
      { label: "services/notifications.ts", badge: "service", affected: false },
    ],
    impact: { modules: 4, routes: 2, surfaces: 1 },
    scope: "medium",
    reviewers: ["AK", "JW"],
  },
  {
    file: "api/repositories.ts",
    module: "API",
    deps: [
      { label: "api/search.ts", badge: "api route", affected: true },
      { label: "app/onboarding.tsx", badge: "ui surface", affected: true },
      { label: "services/sync.ts", badge: "service", affected: true, via: "via services/ingestion.ts" },
      { label: "services/notifications.ts", badge: "service", affected: false },
    ],
    impact: { modules: 4, routes: 1, surfaces: 1 },
    scope: "medium",
    reviewers: ["MT", "SL"],
  },
];

/* ============================= diagram ============================= */

const RX = 118, RY = 200; // root center
const CW = 236, CH = 46;
const ROW_Y = [80, 168, 256, 344];
const CX = 500;

function Diagram({ scenario }: { scenario: Scenario }) {
  const reduced = useReducedMotion();
  return (
    <svg viewBox="0 0 620 424" className="block w-full min-w-[560px]" role="img" aria-label={`Dependency diagram for ${scenario.file}`}>
      {/* paths */}
      {scenario.deps.map((d, i) => {
        const y = ROW_Y[i];
        const my = RY + (y - RY) * 0.5;
        const dPath = `M ${RX + 92} ${RY} L ${RX + 92 + 40} ${RY} L ${RX + 92 + 40} ${my} L ${CX - CW / 2 - 40} ${my} L ${CX - CW / 2 - 40} ${y} L ${CX - CW / 2} ${y}`;
        return (
          <motion.path
            key={`${scenario.file}-${d.label}`}
            d={dPath}
            fill="none"
            stroke={d.affected ? "#a3e635" : "#2b3129"}
            strokeWidth={d.affected ? 1.6 : 1.2}
            strokeDasharray={d.affected ? "none" : "3 5"}
            strokeOpacity={d.affected ? 0.75 : 0.7}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.3, 0.6, 0.2, 1] }}
          />
        );
      })}

      {/* root node */}
      <motion.g
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <rect x={RX - 92} y={RY - 24} width={184} height={48} rx={7} fill="#1a1f17" stroke="#a3e635" strokeWidth={1.5} />
        <circle cx={RX - 92 + 14} cy={RY} r={3} fill="#a3e635" className="anim-pulse-dot" />
        <text x={RX + 6} y={RY + 1} textAnchor="middle" fontSize={12.5} fontWeight={500} fill="#f2f4ec" className="font-mono">
          {scenario.file}
        </text>
        <text x={RX + 6} y={RY + 15} textAnchor="middle" fontSize={8.5} letterSpacing={1.4} fill="#a3e635" className="font-mono">
          YOU ARE CHANGING THIS
        </text>
      </motion.g>

      {/* dependent nodes */}
      {scenario.deps.map((d, i) => {
        const y = ROW_Y[i];
        return (
          <motion.g
            key={`${scenario.file}-node-${d.label}`}
            initial={reduced ? { opacity: 0 } : { opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.12, ease: "easeOut" }}
          >
            <rect
              x={CX - CW / 2}
              y={y - CH / 2}
              width={CW}
              height={CH}
              rx={7}
              fill={d.affected ? "#161911" : "#12140f"}
              stroke={d.affected ? "#3c4726" : "#23271f"}
              strokeWidth={1}
              opacity={d.affected ? 1 : 0.65}
            />
            {d.affected && <rect x={CX - CW / 2} y={y - CH / 2} width={2.5} height={CH} rx={1} fill="#a3e635" />}
            <text
              x={CX - CW / 2 + 14}
              y={y - 5}
              fontSize={12}
              fontWeight={500}
              fill={d.affected ? "#e6eade" : "#6b7069"}
              className="font-mono"
            >
              {d.label}
            </text>
            <text
              x={CX - CW / 2 + 14}
              y={y + 12}
              fontSize={9}
              letterSpacing={1.1}
              fill={d.affected ? "#8fa35a" : "#555a51"}
              className="font-mono"
            >
              {d.affected ? (d.via ? `AFFECTED · ${d.via.toUpperCase()}` : "AFFECTED · DIRECT IMPORT").toUpperCase() : "NOT AFFECTED — NO IMPORT"}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ============================= impact panel ============================= */

function Impact({ scenario }: { scenario: Scenario }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scenario.file}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex h-full flex-col rounded-lg border border-line bg-panel"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="label-mono flex items-center gap-2 text-mute">
            <Siren className="h-3.5 w-3.5 text-lime" />
            Impact
          </span>
          <span className="font-mono text-[10px] text-dim">Illustrative example · import graph</span>
        </div>

        <div className="flex-1 px-4">
          {[
            { k: "Connected modules", v: scenario.impact.modules },
            { k: "API routes", v: scenario.impact.routes },
            { k: "UI surfaces", v: scenario.impact.surfaces },
          ].map((row, i) => (
            <div key={row.k} className={cn("flex items-baseline justify-between py-3", i < 2 && "border-b border-line")}>
              <span className="text-[13px] text-mute">{row.k}</span>
              <span className="font-mono text-[17px] font-semibold tabular-nums text-fog">{row.v}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-line px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-mono text-[10.5px] text-dim">
              <Gauge className="h-3 w-3" /> review scope
            </span>
            <span className="rounded border border-amber/30 px-1.5 py-px font-mono text-[9.5px] uppercase tracking-wider text-amber">
              {scenario.scope}
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[10.5px] text-dim">suggested reviewers</span>
            <span className="flex items-center">
              {scenario.reviewers.map((r, i) => (
                <Avatar key={r} initials={r} i={i} className={i > 0 ? "-ml-1.5" : ""} />
              ))}
            </span>
          </div>
        </div>

        <div className="rounded-b-lg border-t border-lime/20 bg-lime/[0.05] px-4 py-3">
          <p className="flex gap-2 text-[12px] leading-relaxed text-mute">
            <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
            Static analysis resolves the dependency graph; Claude reasons over gathered repository context (affected components, dependencies, Git history, reviewer context) to produce structured impact assessments.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ============================= section ============================= */

export function BlastRadius() {
  const [file, setFile] = useState(0);
  const scenario = SCENARIOS[file];

  return (
    <section id="capabilities" className="relative scroll-mt-16 border-b border-line bg-ink-2/50 overflow-hidden">
      {/* faint ambient grid highlight to subtly elevate the core wedge */}
      <div
        aria-hidden="true"
        className="bg-grid-fine pointer-events-none absolute inset-x-0 top-0 h-64 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHead
            eyebrow="Core capability · Blast radius"
            index="04"
            title="Before you change a file, see what depends on it."
            lede="devvmind analyzes a change across repository structure, dependencies, Git history, and related code to build an evidence-backed context window. Claude can then reason over that context to help explain potential impact, historical context, and review considerations."
          />
          <Reveal delay={0.2} className="lg:justify-self-end">
            <p className="max-w-[34ch] font-mono text-[11px] leading-relaxed text-dim lg:pb-1 lg:text-right">
              Interactive walkthrough · Select a file to inspect its dependency reach
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-xl border border-lime/30 bg-ink shadow-[0_0_60px_-25px_rgba(163,230,53,0.12)]">
            {/* file tabs */}
            <div className="flex flex-wrap items-center gap-1 border-b border-line bg-panel px-3 py-2.5">
              <FileCode2 className="mx-2 h-4 w-4 text-dim" />
              {SCENARIOS.map((s, i) => (
                <button
                  key={s.file}
                  onClick={() => setFile(i)}
                  aria-pressed={file === i}
                  className={cn(
                    "rounded-md border px-3 py-1.5 font-mono text-[11.5px] transition-colors",
                    file === i
                      ? "border-lime/40 bg-lime/10 text-lime"
                      : "border-transparent text-mute hover:bg-panel-2 hover:text-fog"
                  )}
                >
                  {s.file}
                </button>
              ))}
              <span className="ml-auto hidden font-mono text-[10.5px] text-dim sm:inline">
                module: {scenario.module}
              </span>
            </div>

            {/* diagram + impact */}
            <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div className="overflow-x-auto rounded-lg border border-line bg-panel">
                <Diagram scenario={scenario} />
              </div>
              <Impact scenario={scenario} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
