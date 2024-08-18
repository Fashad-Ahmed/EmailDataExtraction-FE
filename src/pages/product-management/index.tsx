import _ from 'lodash';
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { RightArrowIcon } from '@/assets/svgs';
import SPTable from '@/components/atoms/sp-table';
import Card from '@/components/organisms/card';
import useGetApi from '@/hooks/useGetApi';
import { PaginatedResponse } from '@/hooks/usePaginatedApi';
import useQueryString from '@/hooks/useQueryString';
import { IQuotation } from '@/types/quotations.type';
import { QUERY_STRING } from '@/utils/constants/query.constant';
import { formatDate } from '@/utils/helpers/general.helper';
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
  const { setQuery, getQuery } = useQueryString();

  const pageNumber = getQuery(QUERY_STRING.PAGINATION.PAGE);

  const { data: emailContentResponse, isLoading } = useGetApi<
    PaginatedResponse<IQuotation>
  >({
    key: _.compact(['email-content', pageNumber]),
    url: `/email-content`,
    query: {
      ...(pageNumber && { pageNumber }),
    },
  });

  const columns = [
    {
      title: 'ID',
      render: (data: IQuotation) => {
        return <p>{data?.id ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Product',
      render: (data: IQuotation) => {
        return <p>{data?.product ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Product Description',
      render: (data: IQuotation) => {
        return <p>{data?.productDescription ?? 'N/A'}</p>;
      },
    },

    {
      title: 'Availability',
      render: (data: IQuotation) => {
        return <p>{data?.availability ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Available Quantity',
      render: (data: IQuotation) => {
        return <p>{data?.availableQuantity ?? 'N/A'}</p>;
      },
    },

    {
      title: 'Unit Price',
      render: (data: IQuotation) => {
        return <p>{data?.unitPrice ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Supplier Name',
      render: (data: IQuotation) => {
        return <p>{data?.supplierName ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Email Received',
      render: (data: IQuotation) => {
        return (
          <p>
            {data?.emailReceivedAt ? formatDate(data?.emailReceivedAt) : 'N/A'}
          </p>
        );
      },
    },
    {
      title: 'Location',
      render: (data: IQuotation) => {
        return <p>{data?.location ?? 'N/A'}</p>;
      },
    },
  ];

  return (
    <Card heading="Products">
      <SPTable
        dataSource={(emailContentResponse?.data as any) ?? []}
        columns={columns}
        rowKey={(record) => record?.id}
        loading={isLoading}
        pagination={{
          total: emailContentResponse?.totalRecords,
        }}
        scroll={{ x: 300 }}
        onChange={(page) =>
          setQuery({
            [QUERY_STRING.PAGINATION.PAGE]: page.current?.toString() ?? '1',
          })
        }
        footer={() => (
          <p className="text-gray-400">
            Total {emailContentResponse?.totalRecords ?? 0} Items
          </p>
        )}
      />
    </Card>
  );
}
