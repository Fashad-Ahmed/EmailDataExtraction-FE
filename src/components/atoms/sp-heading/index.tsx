import { cn } from '@/utils/helpers/tailwind.helper';
import { HTMLAttributes } from 'react';

export interface SPHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export default function SPHeading({
  className,
  children,
  variant = 'xl',
  ...props
}: SPHeadingProps) {
  return (
    <h1
      className={cn('text-heading text-xl', className, {
        'text-base font-medium': variant === 'xs',
        'text-lg font-medium': variant === 'sm',
        'text-xl font-medium': variant === 'md',
        'text-lg font-semibold': variant === 'lg',
        'text-2xl font-bold': variant === '2xl',
      })}
      {...props}
    >
      {children}
    </h1>
  );
}
