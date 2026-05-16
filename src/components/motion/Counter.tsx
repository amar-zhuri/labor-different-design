import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CounterProps {
  to: number;
  decimals?: number;
  /** Thousands grouping (e.g. 500,000) */
  group?: boolean;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Buttery count-up that fires once when scrolled into view. */
const Counter = ({
  to,
  decimals = 0,
  group = false,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced()) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const ms = duration * 1000;
    // cubic-bezier(0.16,1,0.3,1) ~ expo-out feel
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);
    const tick = (now: number) => {
      const p = Math.min((now - start) / ms, 1);
      setValue(to * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted = (() => {
    const fixed = value.toFixed(decimals);
    if (!group) return fixed;
    const [int, dec] = fixed.split(".");
    const grouped = Number(int).toLocaleString("en-US");
    return dec ? `${grouped}.${dec}` : grouped;
  })();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default Counter;
