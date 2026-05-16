import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  /** Zero-padded index, e.g. "01" */
  index?: string;
  children: ReactNode;
  className?: string;
  /** Inverted (light-on-dark) sections */
  light?: boolean;
}

/**
 * The mono, numbered eyebrow that runs above every section title —
 * the recurring "lab protocol" motif of the design.
 */
const SectionLabel = ({ index, children, className, light }: SectionLabelProps) => (
  <span className={cn("eyebrow", light && "text-primary-light", className)}>
    {index && <span className="font-semibold tabular-nums">{index}</span>}
    {index && <span aria-hidden className="opacity-40">/</span>}
    <span>{children}</span>
  </span>
);

export default SectionLabel;
