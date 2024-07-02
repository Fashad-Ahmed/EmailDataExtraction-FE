import SPContainer from '@/components/atoms/sp-container';
import { SPHeadingProps } from '@/components/atoms/sp-heading';
import ActionHeading from '@/components/molecules/action-heading';
import { cn } from '@/utils/helpers/tailwind.helper';
import { ChangeEvent, HTMLAttributes } from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  containerclassName?: string;
  heading?: string;
  headingClassName?: HTMLAttributes<HTMLDivElement>['className'];
  headingActions?: JSX.Element[];
  headingVariant?: SPHeadingProps['variant'];
  withControls?: boolean;
  onSearch?: (search: ChangeEvent) => void;
  onFilter?: (filter: ChangeEvent) => void;
}

export default function Card({
  containerclassName,
  heading,
  headingClassName,
  headingActions,
  headingVariant,
  children,
}: CardProps) {
  return (
    <SPContainer className={cn('flex flex-col gap-5', containerclassName)}>
      {heading && (
        <ActionHeading
          heading={heading}
          headingVariant={headingVariant}
          className={headingClassName}
          actions={headingActions}
        />
      )}
      {children}
    </SPContainer>
  );
}
