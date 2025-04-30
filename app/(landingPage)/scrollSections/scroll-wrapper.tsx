import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';

interface ScrollWrapperProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const ScrollWrapper = forwardRef<HTMLElement, ScrollWrapperProps>(
  ({ className, children, id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative flex h-screen snap-start snap-always items-center justify-center',
          className,
        )}
      >
        {children}
      </section>
    );
  },
);

ScrollWrapper.displayName = 'ScrollWrapper';
