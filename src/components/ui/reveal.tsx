import { ElementType, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "scale" | "mask";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  variant?: RevealVariant;
  as?: ElementType;
}

/**
 * Robust scroll reveal. Motion lives in CSS ([data-reveal] in index.css);
 * this flips `.is-in` when the element enters — and crucially also when it
 * is already in OR above the viewport on mount (deep links / fast scroll /
 * jump nav never leave content stranded at opacity:0).
 * Fully respects prefers-reduced-motion.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "up",
  as,
}: RevealProps) => {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    // Already visible or scrolled past → show now, no animation gap.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.92) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={cn(shown && "is-in", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
