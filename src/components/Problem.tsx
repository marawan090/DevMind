import { GitCommitHorizontal, GitPullRequest, Users2, Workflow } from "lucide-react";
import { Reveal, Eyebrow } from "./ui";

const CHANNELS = [
  { icon: Workflow, label: "Dependencies", note: "imports, call paths, downstream modules" },
  { icon: GitCommitHorizontal, label: "Previous changes", note: "commits, blame, refactors in the same files" },
  { icon: GitPullRequest, label: "Related pull requests", note: "earlier changes to the same flow" },
  { icon: Users2, label: "Ownership", note: "who wrote, changed, and reviewed this area" },
];

export function Problem() {
  return (
    <section id="problem" className="border-b border-line">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-6 md:py-36 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow index="01">The context challenge</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-[22ch] text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[38px]">
              Modern codebases move faster than human memory can track.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-[1.7] text-mute">
              Pull requests rarely exist in isolation. When modifying code, engineers often lack
              visibility into downstream dependencies, past architectural decisions, and repository history —
              making it hard to know what might break before merging.
            </p>
          </Reveal>
        </div>

        <div className="self-center">
          <div className="border-t border-line">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={0.1 + i * 0.08}>
                <div className="flex items-center gap-3.5 border-b border-line py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line-2 bg-panel-2">
                    <c.icon className="h-3.5 w-3.5 text-lime" strokeWidth={1.9} />
                  </span>
                  <span className="text-[14px] font-medium text-fog">{c.label}</span>
                  <span className="ml-auto text-right font-mono text-[10.5px] leading-snug text-dim">
                    {c.note}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
