/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

import SPButton from '@/components/atoms/sp-button';
import SPTable from '@/components/atoms/sp-table';
import DashboardPage from '@/components/layouts/dashboard-page';

import { productData } from '@/data/product';
// import { PaginatedResponse } from '@/hooks/usePaginatedApi';

export default function Products() {
  const columns = [
    {
      title: 'ID',
      dataIndex: ['id'],
    },
    {
      title: 'Name',
      dataIndex: ['name'],
    },
    {
      title: 'Description',
      width: 300,
      dataIndex: ['description'],
    },
    {
      title: 'Price',
      dataIndex: ['price'],
    },
    {
      title: 'Discounted Amount',
      dataIndex: ['discountPrice'],
    },

    {
      title: 'Category',
      render: (data: any) => {
        return <p>{data?.productCategory?.name ?? 'N/A'}</p>;
      },
    },

    // {
    //   title: '',
    //   render: () => (
    //     <Link to={`./view/${6}`}>
    //       <RightArrowIcon className="h-6 w-6" />
    //     </Link>
    //   ),
    // },
  ];

  return (
    <DashboardPage
      heading="Products"
      className="space-y-5"
      actions={[
        <Link to="./create" relative="path">
          <SPButton type="primary" className="h-auto py-2 font-bold">
            <PlusOutlined /> Create Product
          </SPButton>
        </Link>,
      ]}
    >
      {' '}
      <SPTable
        dataSource={productData}
        columns={columns}
        rowKey={(record) => record?.id}
        // loading={isLoading}
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
            Total {productData?.length ?? 0} Items
          </p>
        )}
      />
    </DashboardPage>
  );
}
