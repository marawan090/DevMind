import { Logo } from "./Nav";
import { GithubMark } from "./icons";

const COLS: { head: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    head: "Product",
    links: [
      { label: "PR blast-radius analysis", href: "#capabilities" },
      { label: "Historical context", href: "#capabilities" },
      { label: "Reviewer intelligence", href: "#capabilities" },
      { label: "Pipeline architecture", href: "#architecture" },
    ],
  },
  {
    head: "Explore",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Founders & Company", href: "#founders" },
      { label: "View DevMind on GitHub", href: "https://github.com/ayaeid225-dev/devmind", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-ink-2">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))]">
          <div>
            <Logo />
            <p className="mt-3 text-[14px] font-medium text-fog">
              Developer Intelligence for modern codebases.
            </p>
            <p className="mt-1 font-mono text-[11px] text-dim">
              Founded 2026 · Egypt
            </p>
            <div className="mt-6 space-y-2 font-mono text-[12px]">
              <div>
                <span className="text-dim">Contact: </span>
                <a
                  href="mailto:info@devvmind.me"
                  className="text-mute hover:text-lime transition-colors underline decoration-line-2 underline-offset-4 hover:decoration-lime"
                >
                  info@devvmind.me
                </a>
              </div>
              <div>
                <span className="text-dim">GitHub: </span>
                <a
                  href="https://github.com/ayaeid225-dev/devmind"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mute hover:text-lime transition-colors"
                >
                  View DevMind on GitHub
                </a>
              </div>
            </div>
          </div>

          {COLS.map((c) => (
            <nav key={c.head} aria-label={c.head}>
              <h3 className="label-mono text-dim">{c.head}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      className="text-[13.5px] text-mute transition-colors hover:text-fog"
                    >
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
