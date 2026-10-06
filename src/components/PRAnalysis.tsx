import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ChevronRight,
  CircleCheck,
  FileCode2,
  FolderTree,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  LayoutDashboard,
  Lock,
  Search,
  Users,
  Workflow,
} from "lucide-react";
import { Avatar, CornerTicks } from "./ui";
import { cn } from "../utils/cn";

/* ============================== demo data ============================== */

const PR = {
  n: 142,
  title: "Update Authentication Flow",
  from: "feat/session-rotation",
  to: "main",
  author: "NK",
  authorName: "nadia",
  commits: 4,
  files: 12,
  add: 412,
  del: 187,
};

const AFFECTED = [
  { file: "auth/middleware.ts", add: 86, del: 41, dependents: 14 },
  { file: "session/service.ts", add: 128, del: 64, dependents: 9 },
  { file: "api/user.ts", add: 34, del: 12, dependents: 7 },
];

const DOWNSTREAM = [
  { mod: "services/notifications", via: "auth/middleware.ts" },
  { mod: "api/projects", via: "session/service.ts" },
  { mod: "app/dashboard", via: "api/user.ts" },
];

const ENDPOINTS = [
  { method: "POST", path: "/auth/refresh" },
  { method: "GET", path: "/api/user/:id" },
];

const HISTORY = [
  {
    icon: GitPullRequest,
    title: "Related change found in PR #87",
    sub: "\u201CConsolidate session handling\u201D · merged 2 months ago · shares auth/middleware.ts",
  },
  {
    icon: GitCommitHorizontal,
    title: "Previous commit modified the same flow",
    sub: "a1e0d4c · \u201Ctemp: bypass session cache\u201D · 6 months ago",
  },
];

const REVIEWERS = [
  { ini: "AK", name: "Ahmed", why: "recent contributor to auth/middleware.ts", meta: "8 commits · last 90 days" },
  { ini: "SL", name: "Sarah", why: "reviewed related PR #87", meta: "approved the last auth change" },
];

const EVIDENCE = [
  { t: "Dependency analysis", d: "import graph around the changed files" },
  { t: "Git history", d: "commits and blame for the affected paths" },
  { t: "Related pull requests", d: "PR #87 shares 2 modules with this change" },
  { t: "Code structure", d: "module boundaries around auth/* and session/*" },
];

const SIDEBAR = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: GitPullRequest, label: "Pull requests", active: true },
  { icon: FolderTree, label: "Architecture" },
  { icon: Workflow, label: "Dependencies" },
  { icon: Activity, label: "Activity" },
  { icon: Users, label: "Contributors" },
];

export function PRAnalysis() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 36, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.9, ease: [0.19, 0.66, 0.22, 1] }}
      className="relative"
    >
      <CornerTicks />
      <div className="overflow-hidden rounded-xl border border-line-2 bg-ink-2 shadow-[0_32px_90px_-40px_rgba(0,0,0,0.9)]">
        {/* window chrome */}
        <div className="flex h-10 items-center gap-3 border-b border-line bg-panel px-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a2e29]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a2e29]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a2e29]" />
          </div>
          <div className="mx-auto flex h-6 w-full max-w-[420px] items-center justify-center gap-1.5 rounded-md border border-line bg-ink-2 px-3 font-mono text-[10.5px] text-dim">
            <Lock className="h-3 w-3" />
            devvmind.me/repo/web-app<span className="text-mute">/pull/142</span>
          </div>
          <div className="hidden w-16 justify-end sm:flex">
            <kbd className="rounded border border-line-2 bg-panel-2 px-1.5 py-0.5 font-mono text-[9.5px] text-dim">⌘K</kbd>
          </div>
        </div>

        <div className="flex">
          {/* sidebar */}
          <aside className="hidden w-[204px] shrink-0 flex-col border-r border-line bg-panel lg:flex">
            <div className="border-b border-line p-3">
              <div className="flex items-center justify-between rounded-md border border-line bg-panel-2 px-2.5 py-2">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-lime font-mono text-[10px] font-semibold text-lime-ink">d</span>
                  <span className="truncate font-mono text-[11.5px] text-fog">devvmind / web-app</span>
                </div>
                <ChevronRight className="h-3 w-3 shrink-0 rotate-90 text-dim" />
              </div>
              <div className="mt-2 flex items-center gap-2 font-mono text-[10.5px] text-dim">
                <GitBranch className="h-3 w-3" /> main
                <span aria-hidden="true" className="text-line-2">·</span>
                <span className="text-mute">repository indexed</span>
              </div>
            </div>
            <nav className="flex flex-1 flex-col gap-0.5 p-2" aria-label="Workspace">
              {SIDEBAR.map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    "flex h-8 items-center gap-2.5 rounded-md px-2.5 text-[12.5px] transition-colors",
                    item.active
                      ? "bg-panel-3 font-medium text-fog shadow-[inset_2px_0_0_0_var(--color-lime)]"
                      : "text-mute hover:bg-panel-2 hover:text-fog"
                  )}
                >
                  <item.icon className="h-[15px] w-[15px] shrink-0" strokeWidth={1.8} />
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="border-t border-line p-3">
              <div className="flex items-center gap-2 font-mono text-[10.5px] text-mute">
                <CircleCheck className="h-3.5 w-3.5 text-lime" />
                Context mapped
              </div>
            </div>
          </aside>

          {/* main */}
          <div className="min-w-0 flex-1 bg-ink-2">
            {/* PR header */}
            <div className="border-b border-line px-5 py-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-dim">
                  <GitPullRequest className="h-3.5 w-3.5 text-lime" />
                  pull request
                  <span className="text-mute">#142</span>
                </span>
                <span className="rounded border border-lime/30 bg-lime/[0.07] px-1.5 py-px font-mono text-[9.5px] uppercase tracking-wider text-lime">
                  Open
                </span>
                <span className="flex items-center gap-1.5 rounded border border-line-2 px-1.5 py-px font-mono text-[9.5px] uppercase tracking-wider text-mute">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime anim-pulse-dot" />
                  analysis ready
                </span>
              </div>
              <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.01em] text-fog sm:text-[20px]">
                {PR.title}
              </h3>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <code className="rounded border border-line-2 bg-panel px-1.5 py-px text-[10.5px] text-mute">{PR.from}</code>
                  <ArrowDown className="h-3 w-3 -rotate-90 text-dim" />
                  <code className="rounded border border-line-2 bg-panel px-1.5 py-px text-[10.5px] text-fog">{PR.to}</code>
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10.5px] text-dim">
                  <Avatar initials={PR.author} i={0} className="h-[18px] w-[18px] text-[8px]" />
                  {PR.authorName} · 12 files changed
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {/* core progression strip: Code -> Context -> Impact */}
              <div className="overflow-hidden rounded-lg border border-line bg-panel">
                <div className="grid sm:grid-cols-3">
                  <div className="border-b border-line px-5 py-4 sm:border-b-0 sm:border-r">
                    <div className="label-mono flex items-center gap-2 text-dim">
                      <span className="h-1.5 w-1.5 rounded-full bg-mute" />
                      01 · Code Change
                    </div>
                    <div className="mt-2 font-mono text-[13px] font-medium text-fog">
                      auth/middleware.ts
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-dim">
                      Validates session tokens & refresh flow
                    </div>
                  </div>

                  <div className="border-b border-line px-5 py-4 sm:border-b-0 sm:border-r">
                    <div className="label-mono flex items-center gap-2 text-dim">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                      02 · Context Retrieved
                    </div>
                    <div className="mt-2 font-mono text-[13px] font-medium text-fog">
                      PR #87 Precedent
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-dim">
                      Consolidated session logic 2 months ago
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <div className="label-mono flex items-center gap-2 text-dim">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                      03 · Blast Radius
                    </div>
                    <div className="mt-2 font-mono text-[13px] font-medium text-amber">
                      High Impact Surface
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-dim">
                      Directly affects 3 downstream services
                    </div>
                  </div>
                </div>
              </div>

              {/* focused two-column intelligence grid */}
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                {/* Column 1: Blast Radius & Dependencies */}
                <div className="flex flex-col rounded-lg border border-line bg-panel p-5">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <span className="label-mono flex items-center gap-2 text-mute">
                      <Workflow className="h-3.5 w-3.5 text-lime" />
                      Dependency Impact
                    </span>
                    <span className="font-mono text-[10px] text-dim">downstream import graph</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {DOWNSTREAM.map((d) => (
                      <div
                        key={d.mod}
                        className="flex items-center justify-between rounded-md border border-line-2 bg-ink-2 px-3 py-2.5 font-mono text-[11.5px]"
                      >
                        <span className="text-fog">{d.mod}</span>
                        <span className="text-[10px] text-dim">via {d.via}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-line pt-4">
                    <div className="label-mono mb-2 text-[10px] text-dim">Affected API routes</div>
                    <div className="flex flex-wrap gap-2">
                      {ENDPOINTS.map((e) => (
                        <span key={e.path} className="flex items-center gap-1.5 rounded border border-line-2 bg-ink-2 px-2.5 py-1 font-mono text-[11px]">
                          <span className={cn("font-semibold", e.method === "POST" ? "text-amber" : "text-lime")}>{e.method}</span>
                          <span className="text-mute">{e.path}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Synthesized PR Intelligence */}
                <div className="flex flex-col rounded-lg border border-line bg-panel p-5">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <span className="label-mono flex items-center gap-2 text-mute">
                      <CircleCheck className="h-3.5 w-3.5 text-lime" />
                      Synthesized Insight
                    </span>
                    <span className="font-mono text-[10px] text-dim">Claude reasoning over context</span>
                  </div>

                  <div className="mt-4 rounded-md border border-lime/25 bg-lime/[0.04] p-3.5">
                    <p className="text-[13px] leading-relaxed text-fog">
                      Modifying <code className="font-mono text-lime">auth/middleware.ts</code> affects token expiration across downstream notification workers and dashboard handlers.
                    </p>
                    <p className="mt-2 font-mono text-[11px] text-dim">
                      Grounded in PR #87 and 4 repository import paths.
                    </p>
                  </div>

                  <div className="mt-5 border-t border-line pt-4">
                    <div className="label-mono mb-2 text-[10px] text-dim">Suggested Reviewers with context</div>
                    <div className="space-y-2">
                      {REVIEWERS.map((r, i) => (
                        <div key={r.name} className="flex items-center justify-between rounded-md border border-line-2 bg-ink-2 px-3 py-2">
                          <div className="flex items-center gap-2.5">
                            <Avatar initials={r.ini} i={i} className="h-5 w-5 text-[8px]" />
                            <span className="text-[12.5px] font-medium text-fog">{r.name}</span>
                          </div>
                          <span className="font-mono text-[10.5px] text-dim">{r.why}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* status bar */}
            <div className="flex items-center gap-4 border-t border-line bg-panel px-5 py-2.5 font-mono text-[10.5px] text-dim sm:px-6">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime anim-pulse-dot" />
                devvmind context layer
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Reasoning by Claude</span>
              <span className="ml-auto text-dim">Evidence cited</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
