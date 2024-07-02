import useQueryString from '@/hooks/useQueryString';
import { cn } from '@/utils/helpers/tailwind.helper';
import { Table, TableProps } from 'antd';

export interface SPTableProps extends TableProps {}

export default function SPTable({
  children,
  scroll,
  className,
  ...props
}: SPTableProps) {
  const { getQuery } = useQueryString();

  return (
    <Table
      className={cn(
        'font-normal [&_td]:!text-text_secondary [&_th]:!font-medium [&_th]:!text-secondary',
        className
      )}
      {...props}
      pagination={{
        showSizeChanger: false,
        current: Number(getQuery('_page') ?? 1),
        ...props.pagination,
      }}
      scroll={{ ...scroll, x: scroll?.x ?? 300 }}
    >
      {' '}
      {children}
    </Table>
  );
}
