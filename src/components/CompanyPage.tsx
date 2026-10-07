import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Mail, ShieldCheck } from "lucide-react";
import { GithubMark, LinkedinMark } from "./icons";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal, Eyebrow } from "./ui";

const FOUNDERS = [
  {
    name: "Aya Eid",
    role: "Founder",
    initials: "AE",
    bio: "Computer Science student and founder of devvmind, focused on building developer tools around repository intelligence, code context, and smarter engineering workflows.",
    linkedin: "https://www.linkedin.com/in/ayaa-eid/",
    email: "aya@devvmind.me",
    contactPrefix: "Founder contact:",
  },
  {
    name: "Marawan Mohamed",
    role: "Co-Founder",
    initials: "MM",
    bio: "Computer Science student and cloud/developer tools enthusiast building devvmind around repository intelligence, code context, and developer workflows.",
    linkedin: "https://www.linkedin.com/in/marawan-mohamed-elkzaz-07178a2a7/",
    email: "marawan@devvmind.me",
    contactPrefix: "Co-Founder contact:",
  },
];

export function CompanyPage() {
  return (
    <div className="min-h-screen bg-ink font-sans text-fog antialiased">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          {/* breadcrumb / back */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-mute transition-colors hover:text-lime"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to devvmind home</span>
            </a>
          </div>

          {/* page header */}
          <header className="border-b border-line pb-14">
            <Reveal>
              <Eyebrow index="COMPANY">Verification & Overview</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-balance text-[34px] font-semibold tracking-[-0.025em] text-fog sm:text-[46px]">
                About devvmind
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.7] text-mute sm:text-[17px]">
                devvmind is a developer intelligence platform founded in 2026. It helps software
                engineers understand repository structure, code relationships, Git history, and the
                potential impact of changes before modifying or merging code.
              </p>
            </Reveal>
          </header>

          {/* quick facts grid */}
          <section aria-label="Company Facts" className="mt-14">
            <Reveal>
              <h2 className="label-mono text-dim">01 · Essential facts</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-line bg-panel p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-dim block">Organization</span>
                <span className="mt-2 block text-[17px] font-semibold text-fog">devvmind</span>
                <span className="mt-1 block font-mono text-[11px] text-mute">Developer intelligence platform</span>
              </div>
              <div className="rounded-xl border border-line bg-panel p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-dim block">Founded</span>
                <span className="mt-2 block text-[17px] font-semibold text-fog">2026</span>
                <span className="mt-1 block font-mono text-[11px] text-mute">Early-stage developer technology</span>
              </div>
              <div className="rounded-xl border border-line bg-panel p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-dim block">Leadership</span>
                <span className="mt-2 block text-[15px] font-semibold text-fog">Aya Eid & Marawan Mohamed</span>
                <span className="mt-1 block font-mono text-[11px] text-mute">Founder & Co-Founder</span>
              </div>
              <div className="rounded-xl border border-line bg-panel p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-dim block">Official domain</span>
                <a
                  href="https://devvmind.me"
                  className="mt-2 block font-mono text-[14px] font-semibold text-lime hover:underline"
                >
                  devvmind.me
                </a>
                <span className="mt-1 block font-mono text-[11px] text-mute">Canonical web address</span>
              </div>
            </div>
          </section>

          {/* founders section */}
          <section id="leadership" aria-label="Founders & Leadership" className="mt-16 border-t border-line pt-14">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
                <h2 className="label-mono text-mute">02 · Founders & Leadership</h2>
              </div>
              <p className="mt-3 text-[22px] font-semibold text-fog sm:text-[26px]">
                Built by developers for engineering teams.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {FOUNDERS.map((f, i) => (
                <Reveal key={f.name} delay={i * 0.1}>
                  <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-panel p-6 sm:p-7">
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

                    <div className="mt-6 border-t border-line pt-4 font-mono text-[12px]">
                      <span className="text-dim">{f.contactPrefix} </span>
                      <a
                        href={`mailto:${f.email}`}
                        className="text-mute hover:text-lime transition-colors underline decoration-line-2 underline-offset-4 hover:decoration-lime"
                      >
                        {f.email}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* technical overview & reasoning layer positioning */}
          <section aria-label="Technology & Architecture" className="mt-16 border-t border-line pt-14">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
                <h2 className="label-mono text-mute">03 · Platform Architecture & AI Reality</h2>
              </div>
              <p className="mt-3 text-[22px] font-semibold text-fog sm:text-[26px]">
                Model-agnostic context built by devvmind.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-lime">
                  <CheckCircle2 className="h-4 w-4" /> Context & Retrieval Engine
                </div>
                <h3 className="mt-3 text-[17px] font-semibold text-fog">
                  Deterministic Repository Intelligence
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-mute">
                  devvmind maps repository topology, static dependency import graphs, symbol call trees,
                  and Git history. It assembles verified evidence for pull requests and code modifications
                  before any code is merged.
                </p>
                <ul className="mt-4 space-y-2 font-mono text-[11.5px] text-mute">
                  <li>• Static dependency & downstream blast-radius analysis</li>
                  <li>• Git history, commit trails, and precedent pull requests</li>
                  <li>• Relevant reviewer intelligence grounded in ownership</li>
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-mute">
                  <ShieldCheck className="h-4 w-4 text-lime" /> Reasoning Layer Status
                </div>
                <h3 className="mt-3 text-[17px] font-semibold text-fog">
                  Claude as the Target Reasoning Layer
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-mute">
                  devvmind is currently prototyping its reasoning layer with open-source models,
                  with Claude as the target reasoning and synthesis layer to be evaluated for
                  repository-scale code intelligence.
                </p>
                <div className="mt-4 rounded-md border border-line-2 bg-ink-2 p-3 font-mono text-[11.5px] text-dim">
                  devvmind builds the engineering context · Planned reasoning layer to be evaluated with Claude
                </div>
              </div>
            </div>
          </section>

          {/* verification links & contacts */}
          <section id="verification" aria-label="Official Verification" className="mt-16 border-t border-line pt-14">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
                <h2 className="label-mono text-mute">04 · Official Channels & Verification</h2>
              </div>
              <p className="mt-3 text-[22px] font-semibold text-fog sm:text-[26px]">
                Canonical links and verified contacts.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <Globe className="h-3.5 w-3.5 text-lime" /> Official Website
                </div>
                <a
                  href="https://devvmind.me"
                  className="mt-3 inline-block font-mono text-[14px] font-semibold text-fog hover:text-lime"
                >
                  https://devvmind.me
                </a>
                <p className="mt-2 text-[13px] leading-relaxed text-mute">
                  Canonical web platform and interactive product presentation.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <GithubMark className="h-3.5 w-3.5 text-lime" /> Official GitHub
                </div>
                <a
                  href="https://github.com/ayaeid225-dev/devmind"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[13px] font-semibold text-fog hover:text-lime"
                >
                  <span>ayaeid225-dev/devmind</span>
                  <ArrowUpRight className="h-3 w-3 text-dim" />
                </a>
                <p className="mt-2 text-[13px] leading-relaxed text-mute">
                  Official repository tracking platform development and architecture.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                  <LinkedinMark className="h-3.5 w-3.5 text-lime" /> Official LinkedIn
                </div>
                <a
                  href="https://www.linkedin.com/company/devmindorg/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[13px] font-semibold text-fog hover:text-lime"
                >
                  <span>devmindorg</span>
                  <ArrowUpRight className="h-3 w-3 text-dim" />
                </a>
                <p className="mt-2 text-[13px] leading-relaxed text-mute">
                  Official devvmind company organization on LinkedIn.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-line bg-panel p-6 sm:p-7">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                <Mail className="h-3.5 w-3.5 text-lime" /> Direct Contact Channels
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim block">General Inquiries</span>
                  <a href="mailto:info@devvmind.me" className="mt-1 block font-mono text-[13px] font-medium text-fog hover:text-lime">
                    info@devvmind.me
                  </a>
                </div>
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim block">Founder</span>
                  <a href="mailto:aya@devvmind.me" className="mt-1 block font-mono text-[13px] font-medium text-fog hover:text-lime">
                    aya@devvmind.me
                  </a>
                </div>
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim block">Co-Founder</span>
                  <a href="mailto:marawan@devvmind.me" className="mt-1 block font-mono text-[13px] font-medium text-fog hover:text-lime">
                    marawan@devvmind.me
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
