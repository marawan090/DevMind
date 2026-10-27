import { CheckCircle2, GitBranch, GitMerge, ShieldCheck, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const ROADMAP_ITEMS = [
  {
    title: "Semgrep Static Analysis",
    desc: "Deep semantic rule matching and automated static code pattern verification across repository syntax trees.",
    tag: "Static Analysis",
  },
  {
    title: "OSV Vulnerability Intelligence",
    desc: "Direct integration with the Open Source Vulnerabilities (OSV) database for real-time package CVE detection and supply-chain risk mapping.",
    tag: "Security",
  },
  {
    title: "GitLab Support",
    desc: "Full merge request governance, branch collision detection, and CI/CD workflow integration for GitLab-hosted codebases.",
    tag: "Platform",
  },
  {
    title: "Bitbucket Support",
    desc: "Pull request analysis, repository intelligence, and evidence-backed reviewer routing for Atlassian Bitbucket teams.",
    tag: "Platform",
  },
];

export function ProductStatus() {
  return (
    <section id="status" className="scroll-mt-16 border-b border-line bg-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6.5fr)_minmax(0,5.5fr)] lg:gap-16 items-start">
          {/* Main messaging */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                <span className="label-mono text-mute">10 · Product Status &amp; Roadmap</span>
                <span className="rounded border border-lime/30 bg-lime/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime">
                  Pilots Starting
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[38px]">
                Working product running on real GitHub repositories.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 space-y-4 text-[15.5px] leading-[1.75] text-mute">
                <p>
                  DevvMind is a working product with all four modules &mdash; Prompt Studio, PR Governance, Security Analysis, and Documentation &mdash; running on real GitHub repositories.
                </p>
                <p>
                  We validated the problem through an in-depth roundtable with engineering leaders, confirming that validating AI-written code before merge is the most critical hurdle in scaling AI adoption. We are now starting pilots with engineering teams.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-dim">
                <span className="flex items-center gap-1.5 rounded border border-lime/30 bg-lime/[0.05] px-2.5 py-1 text-fog">
                  <CheckCircle2 className="h-3.5 w-3.5 text-lime" />
                  All 4 modules operational
                </span>
                <span className="flex items-center gap-1.5 rounded border border-line-2 bg-panel px-2.5 py-1">
                  <ShieldCheck className="h-3 w-3 text-lime" />
                  Roundtable validated with engineering leaders
                </span>
                <span className="flex items-center gap-1.5 rounded border border-line-2 bg-panel px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime anim-pulse-dot" />
                  Starting pilots with engineering teams
                </span>
              </div>
            </Reveal>
          </div>

          {/* Roadmap card */}
          <Reveal delay={0.15}>
            <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-line pb-3.5">
                <span className="label-mono flex items-center gap-2 text-mute">
                  <Sparkles className="h-3.5 w-3.5 text-lime" />
                  Roadmap
                </span>
                <span className="font-mono text-[10.5px] text-dim">Upcoming Releases</span>
              </div>

              <div className="mt-5 space-y-3.5">
                {ROADMAP_ITEMS.map((item) => (
                  <div key={item.title} className="rounded-lg border border-line-2 bg-ink-2 p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[13.5px] font-semibold text-fog">
                        {item.title}
                      </span>
                      <span className="rounded border border-line-2 bg-panel px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-dim">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-mute">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 font-mono text-[11px] text-dim">
                <span>Active development</span>
                <span className="text-lime">Pilots in progress</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
