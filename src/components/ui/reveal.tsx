import { ElementType, ReactNode, RefObject } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "scale" | "mask";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  variant?: RevealVariant;
  as?: ElementType;
  threshold?: number;
}

/**
 * Scroll reveal. The motion lives in CSS ([data-reveal] in index.css);
 * this only flips `.is-in` when the element enters the viewport.
 * Fully respects prefers-reduced-motion.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "up",
  as,
  threshold = 0.15,
}: RevealProps) => {
  const Tag = (as || "div") as ElementType;
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: true,
  });

  return (
    <Tag
      ref={targetRef as RefObject<HTMLElement>}
      data-reveal={variant}
      className={cn(hasIntersected && "is-in", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
