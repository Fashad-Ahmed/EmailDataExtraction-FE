import Sider, { SiderProps } from 'antd/es/layout/Sider';

export interface SPSiderProps extends SiderProps {}

export default function SPSider({ children, ...props }: SPSiderProps) {
  return <Sider {...props}>{children}</Sider>;
}
