import { ArrowDown } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

/* token palette matching the site code style */
const TK = {
  kw: "text-[#e08d72]",
  fn: "text-[#8bb8d8]",
  id: "text-[#d6d8cc]",
  pl: "text-[#8a9088]",
  delRow: "bg-red/[0.07] text-[#c98a7e]",
  addRow: "bg-lime/[0.07] text-[#b8d97a]",
};

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
            "→ last changed in a1e0d4c · related PR #87",
            "→ reviewers with context: Ahmed · Sarah",
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
    <section className="border-b border-line bg-ink-2/40">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-20 sm:px-6 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow index="08">Why devvmind</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-[20ch] text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[36px]">
              Code changes don&rsquo;t happen in isolation.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-[1.75] text-mute">
              Most developer tools focus on the code being changed. devvmind
              connects that change to the surrounding codebase, dependency
              relationships, and engineering history before producing its analysis.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="flex flex-col items-stretch gap-0">
            <DiffPanel />
            <div aria-hidden="true" className="flex items-center justify-center gap-2 py-2">
              <span className="h-4 w-px bg-line-2" />
              <ArrowDown className="h-3 w-3 text-dim" />
              <span className="h-4 w-px bg-line-2" />
            </div>
            <DiffPanel withContext />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
