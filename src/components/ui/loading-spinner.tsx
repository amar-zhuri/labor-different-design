import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A precise lab-instrument loader: a scanning line crossing a
 * hairline crosshair frame — on-brand with the clinical aesthetic.
 */
const LoadingSpinner = ({ className, size = 'md' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-14 w-14',
    lg: 'h-20 w-20',
  };

  return (
    <div className="flex items-center justify-center py-24" role="status" aria-label="Loading">
      <div
        className={cn(
          'crosshair relative overflow-hidden rounded-sm border border-border',
          sizeClasses[size],
          className
        )}
      >
        <div className="absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default LoadingSpinner;
