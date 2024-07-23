/* eslint-disable @typescript-eslint/no-explicit-any */

// import { RightArrowIcon } from '@/assets/svgs';
import SPTable from '@/components/atoms/sp-table';
import Card from '@/components/organisms/card';
import useGetApi from '@/hooks/useGetApi';
// import { Link } from 'react-router-dom';
// import { PaginatedResponse } from '@/hooks/usePaginatedApi';

/**
 * ProductManagement component displays a table of products.
 * It fetches product data from the API using the useGetApi hook.
 * The table columns are defined and the data is rendered accordingly.
 * The component also includes a Card component as a wrapper.
 *
 * @returns {JSX.Element} - The ProductManagement component.
 */

export default function ProductManagement() {
  const { data: emailContentResponse, isLoading } = useGetApi<any>({
    key: ['/public/email-content'],
    url: `/public/email-content`,
  });

  const columns = [
    {
      title: 'ID',
      render: (data: any) => {
        return <p>{data?.id ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Product',
      render: (data: any) => {
        return <p>{data?.product ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Product Description',
      render: (data: any) => {
        return <p>{data?.productDescription ?? 'N/A'}</p>;
      },
    },

    {
      title: 'Availability',
      render: (data: any) => {
        return <p>{data?.availability ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Available Quantity',
      render: (data: any) => {
        return <p>{data?.availableQuantity ?? 'N/A'}</p>;
      },
    },

    {
      title: 'Unit Price',
      render: (data: any) => {
        return <p>{data?.unitPrice ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Supplier Name',
      render: (data: any) => {
        return <p>{data?.supplierName ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Location',
      render: (data: any) => {
        return <p>{data?.location ?? 'N/A'}</p>;
      },
    },
  ];

  return (
    <Card heading="Products">
      <SPTable
        dataSource={(emailContentResponse as any) ?? []}
        columns={columns}
        rowKey={(record) => record?.id}
        loading={isLoading}
        pagination={
          {
            // total: count,
          }
        }
        scroll={{ x: 300 }}
        // onChange={(page) =>
        //   setQuery({
        //     [QUERY_STRING.PAGINATION.PAGE]: page.current?.toString() ?? '1',
        //   })
        // }
        footer={() => (
          <p className="text-gray-400">
            Total {emailContentResponse?.length ?? 0} Items
          </p>
        )}
      />
    </Card>
  );
}
