import { Menu, MenuProps } from 'antd';

export interface SPMenuProps extends MenuProps {}

export default function SPMenu({ ...props }: SPMenuProps) {
  return <Menu {...props} />;
}
