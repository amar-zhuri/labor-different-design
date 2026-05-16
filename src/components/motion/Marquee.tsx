import { Children, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** seconds for one full loop */
  speed?: number;
  reverse?: boolean;
}

/** Seamless infinite marquee (CSS-driven, pauses on hover). */
const Marquee = ({ children, className, speed = 40, reverse }: MarqueeProps) => {
  const items = Children.toArray(children);
  return (
    <div className={cn("marquee-mask group/marquee overflow-hidden", className)}>
      <div
        className="marquee-track group-hover/marquee:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((dup) => (
          <div
            key={dup}
            aria-hidden={dup === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
