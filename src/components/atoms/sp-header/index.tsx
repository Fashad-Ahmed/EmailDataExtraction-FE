import { cn } from '@/utils/helpers/tailwind.helper';
import { Layout, LayoutProps } from 'antd';

export interface SPHeaderProps extends LayoutProps {}

export default function SPHeader({ className, ...props }: SPHeaderProps) {
  const { Header } = Layout;

  return <Header className={cn(className)} {...props} />;
}
