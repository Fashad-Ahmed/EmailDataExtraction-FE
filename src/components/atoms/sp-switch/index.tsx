import { Switch, SwitchProps } from 'antd';

export interface SPSwitchProps extends SwitchProps {
  children?: React.ReactNode;
}

export default function SPSwitch({ children, ...props }: SPSwitchProps) {
  return <Switch {...props}>{children}</Switch>;
}
