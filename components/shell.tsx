import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const shellVariants = cva('grid items-center gap-8 pb-8 pt-6 md:py-8', {
  variants: {
    variant: {
      default: 'container',
      sidebar: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

export function Shell({
  className,
  as: Comp = 'section',
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  );
}
