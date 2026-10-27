import { Briefcase, Code2, Users } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const AUDIENCES = [
  {
    icon: Code2,
    role: "Daily Users",
    title: "Engineers & Tech Leads",
    desc: "Validate AI-generated diffs, understand downstream blast radius, uncover test gaps, and catch untraced dependencies before merge.",
    chips: ["Blast radius", "Precedent PRs", "Test gaps"],
  },
  {
    icon: Briefcase,
    role: "Economic Buyers",
    title: "EMs, Directors & CTOs",
    desc: "Protect production stability, eliminate PR review bottlenecks, and ensure architectural integrity across teams adopting AI coding tools.",
    chips: ["Production stability", "Governance", "Velocity"],
  },
  {
    icon: Users,
    role: "Target Teams",
    title: "15–30 Engineers Adopting AI",
    desc: "Fast-moving product and platform teams scaling their use of AI coding assistants that need evidence-backed pre-merge validation.",
    chips: ["Real GitHub repos", "Multi-module codebases", "AI workflows"],
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-16 border-b border-line bg-ink-2/30">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <SectionHead
          eyebrow="Who it's for"
          index="08"
          title="Built for engineering teams adopting AI coding tools."
          lede="From the engineers reviewing diffs every day to the engineering leaders responsible for production reliability."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-panel p-6 transition-colors duration-200 hover:border-line-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 bg-panel-2 text-lime">
                      <a.icon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <span className="rounded border border-line-2 bg-ink-2 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-dim">
                      {a.role}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold text-fog">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.65] text-mute">
                    {a.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-4">
                  {a.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded border border-line-2 bg-ink-2 px-2 py-0.5 font-mono text-[10px] text-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
