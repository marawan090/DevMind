import { ArrowDown, CheckCircle2, ShieldCheck } from "lucide-react";
import { Eyebrow, Reveal, SectionHead } from "./ui";

/* token palette matching the site code style */
const TK = {
  kw: "text-[#e08d72]",
  fn: "text-[#8bb8d8]",
  id: "text-[#d6d8cc]",
  pl: "text-[#8a9088]",
  delRow: "bg-red/[0.07] text-[#c98a7e]",
  addRow: "bg-lime/[0.07] text-[#b8d97a]",
};

const DIFFERENTIATORS = [
  {
    title: "Historical PR matching",
    desc: "Surfaces past pull requests and architectural precedents to ground current reviews in repository history.",
  },
  {
    title: "Open-PR conflict detection",
    desc: "Detects collisions and overlapping dependencies with concurrent open PRs before they hit main.",
  },
  {
    title: "Test gap detection",
    desc: "Pinpoints untested code paths, missing assertions, and unvalidated downstream surfaces across the blast radius.",
  },
  {
    title: "Pre-generation prompt evaluation",
    desc: "Evaluates prompts in Prompt Studio to bound file touchpoints and establish mandatory test criteria before code is generated.",
  },
  {
    title: "Evidence behind every result",
    desc: "Grounded in deterministic repository graphs, Git blame trails, and citations — never unsupported guesses.",
  },
];

function DiffPanel({ withContext }: { withContext?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line-2 bg-[#0c0e0b]">
      <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-lime anim-pulse-dot" />
        <span className="font-mono text-[11px] text-mute">auth/middleware.ts</span>
        <span className="ml-auto font-mono text-[9.5px] uppercase tracking-wider text-dim">
          {withContext ? "change + context" : "change only"}
        </span>
      </div>
      <pre className="px-0 py-2 font-mono text-[11.5px] leading-[1.9]" aria-hidden="true">
        <div className="px-3.5">
          <span className={TK.id}>{"  const session = await auth."}</span>
          <span className={TK.fn}>validate</span>
          <span className={TK.id}>(token)</span>
        </div>
        <div className={`px-3.5 ${TK.delRow}`}>
          <span>{"- if (!session) return deny()"}</span>
        </div>
        <div className={`px-3.5 ${TK.addRow}`}>
          <span>{"+ const session = await sessions."}</span>
          <span>assert</span>
          <span>(token)</span>
        </div>
        <div className="px-3.5">
          <span className={TK.kw}>if</span>
          <span className={TK.pl}> (!</span>
          <span className={TK.id}>session.</span>
          <span className={TK.id}>orgId</span>
          <span className={TK.pl}>) ...</span>
        </div>
      </pre>
      {withContext && (
        <div className="space-y-1.5 border-t border-line px-3.5 py-3">
          {[
            "→ imported by api/user.ts · app/dashboard.tsx",
            "→ last changed in a1e0d4c · related PR #87 precedent",
            "→ open-PR collision check: clear · test gap flagged on session assertion",
            "→ AI reasoning synthesis: breaking session rotation scope",
          ].map((l) => (
            <div key={l} className="font-mono text-[10.5px] text-mute">{l}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Differentiation() {
  return (
    <section id="differentiation" className="scroll-mt-16 border-b border-line bg-ink-2/40">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5.5fr)] lg:gap-16 items-start">
          {/* Left: differentiators list */}
          <div>
            <SectionHead
              eyebrow="How we're different"
              index="09"
              title="We validate code; we do not generate it."
              lede="AI coding tools focus on writing code faster. DevvMind provides the trusted engineering intelligence and PR governance workflow to validate AI-written code before it reaches production."
            />

            <div className="mt-8 space-y-4">
              {DIFFERENTIATORS.map((d, i) => (
                <Reveal key={d.title} delay={0.1 + i * 0.06}>
                  <div className="rounded-lg border border-line bg-panel p-4 transition-colors hover:border-line-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                      <div>
                        <h4 className="text-[14.5px] font-semibold text-fog">{d.title}</h4>
                        <p className="mt-1 text-[13px] leading-relaxed text-mute">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Code + Context narrative & DiffPanel */}
          <div className="lg:sticky lg:top-24">
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-line bg-panel p-6 sm:p-7">
                <div className="flex items-center justify-between border-b border-line pb-3.5">
                  <span className="label-mono flex items-center gap-2 text-mute">
                    <ShieldCheck className="h-3.5 w-3.5 text-lime" />
                    Code + Context
                  </span>
                  <span className="font-mono text-[10.5px] text-dim">PR Governance</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-[18px] font-semibold text-fog">
                    Code tells you what changed. Context tells you what breaks.
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                    Raw diffs cannot reveal untraced dependencies or missing tests. DevvMind assembles repository evidence so AI reasoning can synthesize understandable, evidence-backed PR governance.
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-stretch gap-0">
                  <DiffPanel />
                  <div aria-hidden="true" className="flex items-center justify-center gap-2 py-2">
                    <span className="h-4 w-px bg-line-2" />
                    <ArrowDown className="h-3 w-3 text-dim" />
                    <span className="h-4 w-px bg-line-2" />
                  </div>
                  <DiffPanel withContext />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
