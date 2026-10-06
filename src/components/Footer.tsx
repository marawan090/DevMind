import { Logo } from "./Nav";
import { GithubMark } from "./icons";

const COLS: { head: string; links: { label: string; href: string }[] }[] = [
  {
    head: "Product",
    links: [
      { label: "PR blast-radius analysis", href: "#capabilities" },
      { label: "Historical context", href: "#capabilities" },
      { label: "Reviewer intelligence", href: "#capabilities" },
      { label: "Architecture", href: "#architecture" },
    ],
  },
  {
    head: "Developers",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Documentation", href: "#top" },
      { label: "GitHub", href: "#top" },
      { label: "Product tour", href: "#product" },
    ],
  },
  {
    head: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Blog", href: "#top" },
      { label: "Privacy", href: "#top" },
      { label: "Terms", href: "#top" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-ink-2">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[34ch] text-[13.5px] leading-[1.7] text-mute">
              Developer intelligence for understanding the impact and context of
              code changes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#top"
                aria-label="DevMind on GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-line-2 text-mute transition-colors hover:border-[#3a4038] hover:text-fog"
              >
                <GithubMark className="h-4 w-4" />
              </a>
              <span className="font-mono text-[10px] text-dim">
                Designed with engineering workflows in mind
              </span>
            </div>
          </div>

          {COLS.map((c) => (
            <nav key={c.head} aria-label={c.head}>
              <h3 className="label-mono text-dim">{c.head}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[13.5px] text-mute transition-colors hover:text-fog">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-dim">© 2026 DevMind</p>
          <p className="font-mono text-[11px] text-dim">
            blast radius · repository context · engineering history
          </p>
        </div>
      </div>
    </footer>
  );
}
