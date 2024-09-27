import { Collapse } from 'antd';
import { RightArrowIcon } from '@/assets/svgs';
import { cn } from '@/utils/helpers/tailwind.helper';

import type { CollapseProps } from 'antd';

export interface ISPAccordionProp extends CollapseProps {
  noPadding?: boolean;
  variant?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  defaultActiveKey?: string[];
}

export function SPAccordion({
  noPadding,
  items,
  variant = 'sm',
  defaultActiveKey,
  ...props
}: ISPAccordionProp) {
  return (
    <Collapse
      rootClassName={cn(
        ' [&_.ant-collapse-header-text]:!text-xl [&_.ant-collapse-item]:!rounded-b-[10px] [&_.ant-collapse-item]:!overflow-hidden [&_.ant-collapse-header-text]:!text-heading [&_.ant-collapse-header]:!bg-white !border-0 [&_.ant-collapse-header]:!rounded-t-[10px] [&_.ant-collapse-header]:!rounded-b-none [&_.ant-collapse-item]:!border-0 [&_.ant-collapse-content]:!border-gray-100 ',
        {
          '[&_.ant-collapse-content-box]:!p-0': noPadding,
          '[&_.ant-collapse-header-text]:!text-base [&_.ant-collapse-header-text]:!font-medium':
            variant === 'xs',
          '[&_.ant-collapse-header-text]:!text-lg [&_.ant-collapse-header-text]:!font-medium':
            variant === 'sm',
          '[&_.ant-collapse-header-text]:!text-xl [&_.ant-collapse-header-text]:!font-medium':
            variant === 'md',
          '[&_.ant-collapse-header-text]:!text-lg [&_.ant-collapse-header-text]:!font-semibold':
            variant === 'lg',
        }
      )}
      expandIcon={({ isActive }) => (
        <RightArrowIcon
          className={cn('size-8 rotate-90 transition ease-in', {
            '-rotate-90': isActive,
          })}
        />
      )}
      expandIconPosition="end"
      items={items}
      defaultActiveKey={defaultActiveKey ?? []}
      {...props}
    />
  );
}

export default SPAccordion;
