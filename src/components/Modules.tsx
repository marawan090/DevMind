import { BookOpen, FileCheck, GitPullRequest, ShieldAlert, Terminal } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const MODULES = [
  {
    icon: Terminal,
    title: "Prompt Studio",
    benefit:
      "Flags ambiguous or risky prompts before code generation, predicts the blast radius of touched files, and rewrites prompts with explicit file boundaries and mandatory test criteria.",
    tag: "Pre-generation",
    accent: false,
  },
  {
    icon: GitPullRequest,
    title: "PR Governance",
    benefit:
      "Analyzes dependency impact, test gaps, change size, and downstream files; detects collisions with other open PRs; and gives an evidence-backed merge recommendation.",
    tag: "Pre-merge",
    accent: true,
  },
  {
    icon: ShieldAlert,
    title: "Security Analysis",
    benefit:
      "Scans codebases for vulnerabilities, identifies exploitable attack paths, and delivers actionable fixes before code reaches production.",
    tag: "Vulnerabilities",
    accent: false,
  },
  {
    icon: BookOpen,
    title: "Documentation",
    benefit:
      "Links developer notes and architectural decisions directly to relevant code files, eliminating knowledge scattered across Slack.",
    tag: "Context trail",
    accent: false,
  },
];

export function Modules() {
  return (
    <section id="modules" className="scroll-mt-16 border-b border-line bg-ink-2/30">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <SectionHead
          eyebrow="Four core modules"
          index="02"
          title="Complete engineering intelligence across the code lifecycle."
          lede="DevvMind provides four integrated modules that validate AI-written code from prompt drafting to production merge."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col justify-between rounded-xl border bg-panel p-6 transition-colors duration-300 hover:border-line-2 ${
                  m.accent ? "border-lime/30 shadow-[0_0_40px_-15px_rgba(163,230,53,0.12)]" : "border-line"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                        m.accent
                          ? "border-lime/30 bg-lime/10 text-lime"
                          : "border-line-2 bg-panel-2 text-mute"
                      }`}
                    >
                      <m.icon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <span className="rounded border border-line-2 bg-ink-2 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-dim">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-fog">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.65] text-mute">
                    {m.benefit}
                  </p>
                </div>

                <div className="mt-6 border-t border-line pt-3 font-mono text-[11px] text-dim">
                  Module 0{i + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
