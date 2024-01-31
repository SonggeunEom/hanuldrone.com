import { forwardRef } from 'react';

interface ScrollWrapperProps {
  id: number;
  className?: string;
}

export const ScrollWrapper = forwardRef<HTMLElement, ScrollWrapperProps>(
  ({ id, className }, ref) => {
    return (
      <section className="relative flex h-screen snap-center snap-normal items-center justify-center">
        <div className="relative m-5 h-96 max-h-[90vh] w-72 overflow-hidden">
          <img
            src={`/${id}.jpg`}
            alt="A London skyscraper"
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          />
        </div>
        {`#00${id}`}
      </section>
    );
  },
);
