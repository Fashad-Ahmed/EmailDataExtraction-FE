import { DropDownProps, Dropdown } from 'antd';
import { cn } from '@/utils/helpers/tailwind.helper';

export interface SPDropdownProps extends DropDownProps {}

export default function SPDropdown({
  className,
  children,
  ...props
}: SPDropdownProps) {
  return (
    <Dropdown className={cn(className)} {...props}>
      {children}
    </Dropdown>
  );
}
