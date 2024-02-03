import { ReactNode, forwardRef } from 'react';

interface ScrollWrapperProps {
  className?: string;
  children: ReactNode;
}

export const ScrollWrapper = forwardRef<HTMLElement, ScrollWrapperProps>(
  ({ className, children }, ref) => {
    return (
      <section className="relative flex h-screen snap-center snap-normal items-center justify-center">
        {children}
      </section>
    );
  },
);
