import { cn } from '@/utils/helpers/tailwind.helper';
import { HTMLAttributes } from 'react';

export interface SPLabelProps extends HTMLAttributes<HTMLDivElement> {
  showAsterik?: boolean;
}

export default function SPLabel({
  children,
  className,
  ...props
}: SPLabelProps) {
  return (
    <div className={cn('select-none', className)} {...props}>
      {children}
    </div>
  );
}
