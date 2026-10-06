import { ArrowUpRight, Mail } from "lucide-react";
import { GithubMark, LinkedinMark } from "./icons";
import { Reveal, SectionHead } from "./ui";

const FOUNDER = {
  name: "Marawan Mohamed",
  role: "Founder",
  initials: "MM",
  bio: "Computer Science student and cloud/developer tools enthusiast building devvmind around repository intelligence, code context, and developer workflows.",
  linkedin: "https://www.linkedin.com/in/marawan-mohamed-elkzaz-07178a2a7/",
  email: "marawan@devvmind.me",
};

export function Founders() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line bg-ink-2/30">
      <div id="founders" className="scroll-mt-16" />
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <SectionHead
          eyebrow="About & Company"
          index="09"
          title="Built for engineers navigating complex codebases."
          lede="devvmind is a developer intelligence platform founded in 2026 by Marawan Mohamed."
        />

        {/* founder & company overview grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* founder card */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-panel p-6 sm:p-7 transition-colors hover:border-line-2">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lime/30 bg-lime/10 font-mono text-[13px] font-semibold text-lime">
                      {FOUNDER.initials}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-fog">{FOUNDER.name}</h3>
                      <span className="rounded border border-line-2 bg-ink-2 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mute">
                        {FOUNDER.role}
                      </span>
                    </div>
                  </div>

                  <a
                    href={FOUNDER.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${FOUNDER.name} on LinkedIn`}
                    className="group flex items-center gap-1.5 rounded-md border border-line-2 bg-panel-2 px-2.5 py-1.5 font-mono text-[11px] text-mute transition-colors hover:border-[#3a4038] hover:text-fog"
                  >
                    <LinkedinMark className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>

                <p className="mt-5 text-[14.5px] leading-[1.7] text-mute">
                  {FOUNDER.bio}
                </p>
              </div>

              <div className="mt-6 border-t border-line pt-4 font-mono text-[12px]">
                <span className="text-dim">Founder contact: </span>
                <a
                  href={`mailto:${FOUNDER.email}`}
                  className="text-mute hover:text-lime transition-colors underline decoration-line-2 underline-offset-4 hover:decoration-lime"
                >
                  {FOUNDER.email}
                </a>
              </div>
            </div>
          </Reveal>

          {/* company identity block */}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-panel p-6 sm:p-7 transition-colors hover:border-line-2">
              <div>
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
                  <span className="label-mono text-mute">Company identity</span>
                </div>
                <h4 className="mt-3 text-[18px] font-semibold text-fog">devvmind</h4>
                <p className="mt-1 font-mono text-[12px] text-dim">
                  Developer intelligence platform founded in 2026 by Marawan Mohamed.
                </p>
                <p className="mt-4 text-[13.5px] leading-[1.7] text-mute">
                  devvmind helps engineers understand repository structure, code relationships,
                  history, and the potential impact of changes before modifying or merging code.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 font-mono text-[11px] text-dim">
                <span>Founded 2026 · Egypt</span>
                <a
                  href="https://devvmind.me"
                  className="text-mute hover:text-lime transition-colors underline decoration-line-2 underline-offset-4 hover:decoration-lime"
                >
                  https://devvmind.me
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* official links & contact block */}
        <Reveal delay={0.3}>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {/* contact card */}
            <div className="flex flex-col justify-between rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <Mail className="h-3.5 w-3.5 text-lime" /> Official Contact
                </div>
                <div className="mt-3 space-y-2">
                  <div>
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim block">General inquiries</span>
                    <a
                      href="mailto:info@devvmind.me"
                      className="font-mono text-[13px] font-medium text-fog transition-colors hover:text-lime underline decoration-line-2 underline-offset-4 hover:decoration-lime"
                    >
                      info@devvmind.me
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim block">Founder email</span>
                    <a
                      href="mailto:marawan@devvmind.me"
                      className="font-mono text-[13px] font-medium text-fog transition-colors hover:text-lime underline decoration-line-2 underline-offset-4 hover:decoration-lime"
                    >
                      marawan@devvmind.me
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-4 font-mono text-[11px] text-dim">
                Inquiries & product development
              </p>
            </div>

            {/* github card */}
            <div className="flex flex-col justify-between rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <GithubMark className="h-3.5 w-3.5 text-lime" /> Official GitHub
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-mute">
                  Follow the development of devvmind on GitHub.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com/ayaeid225-dev/devmind"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line-2 bg-panel-2 px-3.5 py-1.5 text-[12.5px] font-medium text-fog transition-colors hover:border-lime/40 hover:bg-panel-3"
                >
                  View on GitHub
                  <ArrowUpRight className="h-3 w-3 text-dim" />
                </a>
              </div>
            </div>

            {/* linkedin card */}
            <div className="flex flex-col justify-between rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <LinkedinMark className="h-3.5 w-3.5 text-lime" /> Official LinkedIn
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-mute">
                  Official devvmind company page on LinkedIn.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/company/devmindorg/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line-2 bg-panel-2 px-3.5 py-1.5 text-[12.5px] font-medium text-fog transition-colors hover:border-lime/40 hover:bg-panel-3"
                >
                  View Company Page
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
