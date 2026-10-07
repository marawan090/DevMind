import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, Reveal } from "./ui";

/* faint architecture diagram behind the CTA */
function BackdropDiagram() {
  const reduced = useReducedMotion();
  const N = [
    { x: 620, y: 60, w: 150, h: 40 },
    { x: 420, y: 170, w: 150, h: 40 },
    { x: 820, y: 170, w: 150, h: 40 },
    { x: 520, y: 285, w: 150, h: 40 },
    { x: 760, y: 300, w: 150, h: 40 },
  ];
  const E: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4]];
  const path = (a: (typeof N)[0], b: (typeof N)[0]) => {
    const ax = a.x + a.w / 2, ay = a.y + a.h;
    const bx = b.x + b.w / 2, by = b.y;
    const my = (ay + by) / 2;
    return `M ${ax} ${ay} L ${ax} ${my} L ${bx} ${my} L ${bx} ${by}`;
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1040 380"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_right,transparent_25%,black_65%)]"
    >
      {E.map(([a, b], i) => (
        <motion.path
          key={i}
          d={path(N[a], N[b])}
          fill="none"
          stroke={i === 0 ? "rgba(163,230,53,0.35)" : "#242923"}
          strokeWidth={i === 0 ? 1.5 : 1}
          initial={reduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
        />
      ))}
      {N.map((n, i) => (
        <motion.rect
          key={i}
          x={n.x}
          y={n.y}
          width={n.w}
          height={n.h}
          rx={7}
          fill="#121511"
          stroke={i === 0 ? "rgba(163,230,53,0.45)" : "#262b24"}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section id="explore" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-6 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line-2 bg-panel">
            <BackdropDiagram />
            <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent_70%)]" />
            <div className="relative px-6 py-16 sm:px-12 md:py-24 lg:px-16">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
                <span className="label-mono text-mute">Repository Intelligence</span>
              </div>
              <h2 className="mt-5 max-w-[20ch] text-balance text-[32px] font-semibold leading-[1.12] tracking-[-0.025em] text-fog sm:text-[42px]">
                Understand your codebase before you change it.
              </h2>
              <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.7] text-mute">
                Explore how devvmind connects code, context, history, and reasoning.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryButton href="#top" className="h-11 px-5 text-[14px]">
                  Explore devvmind
                  <ArrowRight className="h-4 w-4 transition-transform duration-200" />
                </PrimaryButton>
                <a
                  href="#how-it-works"
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-mute transition-colors hover:text-fog"
                >
                  See How It Works
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
              <p className="mt-6 font-mono text-[11px] text-dim">
                Repository · Context · Reasoning Layer · Impact
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
