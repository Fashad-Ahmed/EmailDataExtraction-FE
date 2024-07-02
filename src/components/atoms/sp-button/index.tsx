import { cn } from '@/utils/helpers/tailwind.helper';
import { Button, ButtonProps } from 'antd';

export interface SPButtonProps extends ButtonProps {}

export default function SPButton({
  children,
  className,
  ...props
}: SPButtonProps) {
  return (
    <Button
      className={cn('flex items-center justify-center shadow-none', className)}
      {...props}
    >
      {children}
    </Button>
  );
}
