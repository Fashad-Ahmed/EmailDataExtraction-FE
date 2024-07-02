import SPButton from '@/components/atoms/sp-button';
import SPContainer from '@/components/atoms/sp-container';
import ActionHeading from '@/components/molecules/action-heading';
import { cn } from '@/utils/helpers/tailwind.helper';
import { CloseOutlined } from '@ant-design/icons';
import { HTMLAttributes } from 'react';

export interface DropdownMenuProps<T> {
  heading?: string;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  onClose?: () => void;
  data: T[];
  component: (props: T) => JSX.Element;
  headingActions?: any;
}

export default function DropdownMenu<T>({
  onClose,
  data,
  heading,
  className,
  component,
  headingActions,
}: DropdownMenuProps<T>) {
  return (
    <SPContainer
      className={cn(
        'flex w-[500px] flex-1 flex-col gap-3 p-8 pt-2 shadow',
        className
      )}
    >
      <div className="self-end">
        {onClose && (
          <SPButton type="text" onClick={onClose}>
            <CloseOutlined className="text-xl" />
          </SPButton>
        )}
      </div>
      {heading && (
        <ActionHeading
          heading={heading}
          headingVariant="lg"
          actions={headingActions}
        />
      )}
      <div className="flex max-h-[400px] flex-col gap-3 overflow-y-auto">
        {data?.map((item) => component(item))}
      </div>
    </SPContainer>
  );
}
