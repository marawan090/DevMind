import { useEffect, useState } from "react";
import { Menu, Waypoints, X } from "lucide-react";
import { GithubMark } from "./icons";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Blast radius", href: "#capabilities" },
  { label: "Architecture", href: "#architecture" },
  { label: "About", href: "#about" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)}>
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[6px] bg-lime transition-colors group-hover:bg-[#b6ef52]">
        <Waypoints className="h-[13px] w-[13px] text-lime-ink" strokeWidth={2.5} />
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-fog lowercase">
        devvmind
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-ink-2/85 backdrop-blur-md transition-[border-color,background-color] duration-300",
        scrolled ? "border-line" : "border-line/60"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-5 sm:px-6">
        <div className="flex items-center gap-9">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-md px-3 py-1.5 text-[13.5px] font-medium text-mute transition-colors hover:bg-panel-2 hover:text-fog"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com/ayaeid225-dev/devmind"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md px-3 py-1.5 text-[13.5px] font-medium text-mute transition-colors hover:bg-panel-2 hover:text-fog"
          >
            <GithubMark className="h-[15px] w-[15px]" />
            GitHub
          </a>
          <a
            href="#product"
            className="inline-flex h-8 items-center gap-2 rounded-md bg-lime px-3.5 text-[13px] font-semibold text-lime-ink transition-colors hover:bg-[#b6ef52]"
          >
            Explore devvmind
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line-2 text-mute lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-b border-line bg-ink-2 transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[380px]" : "max-h-0 border-b-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-[14px] font-medium text-mute hover:bg-panel-2 hover:text-fog"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-3 border-t border-line pt-4">
            <a
              href="#product"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-lime text-[13.5px] font-semibold text-lime-ink"
            >
              Explore devvmind
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
