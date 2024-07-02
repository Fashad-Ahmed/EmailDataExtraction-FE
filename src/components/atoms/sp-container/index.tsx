import { cn } from '@/utils/helpers/tailwind.helper';
import { HTMLAttributes } from 'react';

export interface SPContainerProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
  headingClassName?: HTMLAttributes<HTMLDivElement>['className'];
}

export default function SPContainer({
  children,
  className,
  ...props
}: SPContainerProps) {
  return (
    <div className={cn('rounded-[10px] bg-white p-5', className)} {...props}>
      {children}
    </div>
  );
}
