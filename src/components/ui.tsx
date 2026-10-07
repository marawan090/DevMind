import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------------- Reveal: gentle scroll-based entrance ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Counter: eased number roll-in ---------------- */

export function Counter({
  value,
  duration = 1400,
  className,
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-US")}
    </span>
  );
}

/* ---------------- Eyebrow: technical micro-label ---------------- */

export function Eyebrow({
  children,
  index,
  className,
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {index !== undefined && (
        <span className="label-mono text-dim">{index}</span>
      )}
      <span aria-hidden="true" className="block h-1.5 w-1.5 bg-lime" />
      <span className="label-mono text-mute">{children}</span>
    </div>
  );
}

/* ---------------- Section headline block ---------------- */

export function SectionHead({
  eyebrow,
  index,
  title,
  lede,
  className,
  ledeClassName,
}: {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  ledeClassName?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 max-w-[22ch] text-balance text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-fog sm:text-[36px]">
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 max-w-xl text-[15.5px] leading-[1.7] text-mute",
              ledeClassName
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Buttons ---------------- */

export function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<any>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}) {
  const commonClasses = cn(
    "group inline-flex h-10 items-center gap-2 rounded-md bg-lime px-4 text-[13.5px] font-semibold text-lime-ink transition-colors duration-200 hover:bg-[#b6ef52] active:bg-lime-deep disabled:opacity-60 disabled:pointer-events-none cursor-pointer",
    className
  );

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick} className={commonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={commonClasses}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<any>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}) {
  const commonClasses = cn(
    "inline-flex h-10 items-center gap-2 rounded-md border border-line-2 bg-panel-2 px-4 text-[13.5px] font-medium text-fog transition-colors duration-200 hover:border-[#353b33] hover:bg-panel-3 disabled:opacity-60 disabled:pointer-events-none cursor-pointer",
    className
  );

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick} className={commonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={commonClasses}>
      {children}
    </button>
  );
}

export function TextLink({
  children,
  href = "#",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-mute transition-colors hover:text-fog",
        className
      )}
    >
      {children}
      <ArrowLeft
        className="h-3.5 w-3.5 rotate-180 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

/* ---------------- Panel chrome: corner ticks for technical frames ---------------- */

export function CornerTicks({ className }: { className?: string }) {
  const t = "absolute font-mono text-[11px] leading-none text-dim select-none pointer-events-none";
  return (
    <div aria-hidden="true" className={cn("absolute inset-0", className)}>
      <span className={cn(t, "-top-[6px] -left-[5px]")}>+</span>
      <span className={cn(t, "-top-[6px] -right-[4px]")}>+</span>
      <span className={cn(t, "-bottom-[5px] -left-[5px]")}>+</span>
      <span className={cn(t, "-bottom-[5px] -right-[4px]")}>+</span>
    </div>
  );
}

/* ---------------- Avatar: contributor initials chip ---------------- */

const AVATAR_TONES = ["#2c3524", "#333022", "#24333a", "#3a2927", "#2b2f3d"];

export function Avatar({
  initials,
  i = 0,
  className,
}: {
  initials: string;
  i?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-line-2 font-mono text-[9px] font-medium text-mute",
        className
      )}
      style={{ backgroundColor: AVATAR_TONES[i % AVATAR_TONES.length] }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
