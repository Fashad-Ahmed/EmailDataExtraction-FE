import SPTable from '@/components/atoms/sp-table';
import Card from '@/components/organisms/card';

// id
// product
// product description
// availability
// available quantity
// unit price
// supplier name
// location
export default function ProductManagement() {
  const columns = [
    {
      title: 'ID',
      render: (data: any) => {
        return <p>{data?.id}</p>;
      },
    },
    {
      title: 'Product',
      render: (data: any) => {
        return <p>{data?.product}</p>;
      },
    },
    {
      title: 'Product Description',
      render: (data: any) => {
        return <p>{data?.product}</p>;
      },
    },

    {
      title: 'Availability',
      render: (data: any) => {
        return <p>{data?.availability}</p>;
      },
    },
    {
      title: 'Available Quantity',
      render: (data: any) => {
        return <p>{data?.product}</p>;
      },
    },

    {
      title: 'Unit Price',
      render: (data: any) => {
        return <p>{data?.product}</p>;
      },
    },
    {
      title: 'Supplier Name',
      render: (data: any) => {
        return <p>{data?.product}</p>;
      },
    },
    {
      title: 'Location',
      render: (data: any) => {
        return <p>{data?.product}</p>;
      },
    },
  ];

  return (
    <Card heading="">
      <SPTable
        dataSource={[]}
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
        // footer={() => <p className="text-gray-400">Total {count} Items</p>}
      />
    </Card>
  );
}
