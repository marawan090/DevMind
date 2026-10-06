import { ArrowUpRight, Mail } from "lucide-react";
import { GithubMark, LinkedinMark } from "./icons";
import { Reveal, SectionHead } from "./ui";

const FOUNDERS = [
  {
    name: "Aya Eid",
    role: "Founder",
    initials: "AE",
    bio: "Software developer and product collaborator working with DevMind on product development and the developer experience.",
    linkedin: "https://www.linkedin.com/in/ayaa-eid/",
  },
  {
    name: "Marawan Mohamed",
    role: "Co-Founder",
    initials: "MM",
    bio: "Computer Science student and cloud/developer tools enthusiast building DevMind around repository intelligence, code context, and developer workflows.",
    linkedin: "https://www.linkedin.com/in/marawan-mohamed-elkzaz-07178a2a7/",
  },
];

export function Founders() {
  return (
    <section id="founders" className="scroll-mt-16 border-b border-line bg-ink-2/30">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <SectionHead
          eyebrow="Founders & Company"
          index="09"
          title="Built by engineers for complex codebases."
          lede="DevMind is an independent, founder-led developer technology project focused on repository intelligence and codebase context."
        />

        {/* founders grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-panel p-6 sm:p-7 transition-colors hover:border-line-2">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lime/30 bg-lime/10 font-mono text-[13px] font-semibold text-lime">
                        {f.initials}
                      </span>
                      <div>
                        <h3 className="text-[17px] font-semibold text-fog">{f.name}</h3>
                        <span className="rounded border border-line-2 bg-ink-2 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mute">
                          {f.role}
                        </span>
                      </div>
                    </div>

                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${f.name} on LinkedIn`}
                      className="group flex items-center gap-1.5 rounded-md border border-line-2 bg-panel-2 px-2.5 py-1.5 font-mono text-[11px] text-mute transition-colors hover:border-[#3a4038] hover:text-fog"
                    >
                      <LinkedinMark className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-3 w-3 text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>

                  <p className="mt-5 text-[14.5px] leading-[1.7] text-mute">
                    {f.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* company identity, contact, & github reference */}
        <Reveal delay={0.2}>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* company identity block */}
            <div className="rounded-xl border border-line bg-panel p-6 sm:p-7 md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
                <span className="label-mono text-mute">Company identity</span>
              </div>
              <h4 className="mt-3 text-[18px] font-semibold text-fog">DevMind</h4>
              <p className="mt-1 font-mono text-[12px] text-dim">
                Developer Intelligence for modern codebases.
              </p>
              <p className="mt-4 text-[13.5px] leading-[1.7] text-mute">
                DevMind helps engineers understand repository structure, code relationships,
                history, and the potential impact of changes before modifying or merging code.
              </p>
              <div className="mt-5 border-t border-line pt-4 font-mono text-[11px] text-dim">
                Founded 2026 · Egypt
              </div>
            </div>

            {/* contact & development tracking */}
            <div className="flex flex-col justify-between gap-6 rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <Mail className="h-3.5 w-3.5 text-lime" /> Official Contact
                </div>
                <div className="mt-2.5">
                  <a
                    href="mailto:info@devvmind.me"
                    className="font-mono text-[13px] font-medium text-fog transition-colors hover:text-lime underline decoration-line-2 underline-offset-4 hover:decoration-lime"
                  >
                    info@devvmind.me
                  </a>
                </div>
                <p className="mt-1.5 font-mono text-[11px] text-dim">
                  Inquiries & product development
                </p>
              </div>

              <div className="border-t border-line pt-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <GithubMark className="h-3.5 w-3.5 text-lime" /> DevMind on GitHub
                </div>
                <p className="mt-2 text-[12.5px] leading-snug text-mute">
                  Follow the development of DevMind on GitHub.
                </p>
                <a
                  href="https://github.com/ayaeid225-dev/devmind"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3.5 inline-flex items-center gap-2 rounded-md border border-line-2 bg-panel-2 px-3.5 py-1.5 text-[12.5px] font-medium text-fog transition-colors hover:border-lime/40 hover:bg-panel-3"
                >
                  View on GitHub
                  <ArrowUpRight className="h-3 w-3 text-dim" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
