import SPContainer from '@/components/atoms/sp-container';
import SPLabel from '@/components/atoms/sp-label';
import { cn } from '@/utils/helpers/tailwind.helper';
import { HTMLAttributes } from 'react';

export interface StatsProps {
  label: string;
  value: string;
}

export interface StatsGroupProps {
  heading: string;
  stats: StatsProps[];
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export default function Stats({ label, value }: StatsProps) {
  return (
    <SPContainer className="grid grid-cols-1 p-8">
      <SPLabel className="font-medium text-secondary">{label}</SPLabel>
      <SPLabel className="text-lg font-bold text-primary">{value}</SPLabel>
    </SPContainer>
  );
}

Stats.Group = function StatsGroup({
  heading,
  stats,
  className,
}: StatsGroupProps) {
  return (
    <SPContainer className={cn('grid grid-cols-1 gap-4 p-8 ', className)}>
      <SPLabel className="text-xl font-medium text-secondary">
        {heading}
      </SPLabel>
      <div className="grid auto-cols-auto grid-flow-col divide-x divide-y-0 divide-solid divide-gray-200 overflow-x-auto ">
        {stats.map((stat, index) => (
          <div className="min-w-32 pl-8 first:pl-0" key={index}>
            <SPLabel className="font-medium text-secondary">
              {stat.label}
            </SPLabel>
            <SPLabel className="text-lg font-bold text-primary">
              {stat.value}
            </SPLabel>
          </div>
        ))}
      </div>
    </SPContainer>
  );
};
