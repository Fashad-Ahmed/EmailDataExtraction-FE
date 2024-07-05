import Stats from '@/components/molecules/stats';
import Card from '@/components/organisms/card';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import useGetApi from '@/hooks/useGetApi';

function calculateStats(statsResponseData: any) {
  const totalProducts = statsResponseData?.reduce(
    (acc: any, curr: { noOfProducts: any }) => acc + curr?.noOfProducts,
    0
  );
  const avgProductsPerSupplier = totalProducts / statsResponseData?.length;
  const sortedSuppliers = [...statsResponseData]?.sort(
    (a, b) => b?.noOfProducts - a?.noOfProducts
  );

  return {
    totalProducts,
    avgProductsPerSupplier,
    topSupplier: sortedSuppliers[0],
    bottomSupplier: sortedSuppliers[sortedSuppliers.length - 1],
  };
}

export default function Dashboard() {
  const {
    data: statsResponse,
    // isLoading,
  } = useGetApi<any>({
    key: ['/public/dashboard'],
    url: `/public/dashboard`,
  });

  // const statsResponseData = statsResponse?.data;

  const statsResponseData = [
    {
      supplierName: 'A',
      noOfProducts: 4,
    },
    {
      supplierName: 'B',
      noOfProducts: 1,
    },
    {
      supplierName: 'D',
      noOfProducts: 1,
    },
    {
      supplierName: 'E',
      noOfProducts: 1,
    },
    {
      supplierName: 'G',
      noOfProducts: 1,
    },
    {
      supplierName: 'ophycare',
      noOfProducts: 3,
    },
  ];
  console.log({ statsResponseData });

  const { totalProducts, avgProductsPerSupplier, topSupplier, bottomSupplier } =
    calculateStats(statsResponseData);

  console.log(
    { totalProducts },
    { avgProductsPerSupplier },
    { topSupplier },
    { bottomSupplier }
  );

  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      renderTo: 'container',
    },
    title: {
      text: 'Supplier Product Count',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Product Count',
        data: statsResponseData.map(
          (item: { supplierName: any; noOfProducts: any }) => ({
            name: item?.supplierName,
            y: item?.noOfProducts,
          })
        ),
        type: 'pie',
      },
    ],
  };

  return (
    <Card heading="Stats">
      <div className="grid grid-cols-1 gap-5">
        <div className="grid  grid-cols-1 gap-5 md:grid-cols-3">
          <Stats.Group
            heading="Suppliers"
            className="md:col-span-2"
            stats={[
              {
                label: 'Average Products Per Supplier',
                value: avgProductsPerSupplier?.toFixed(2) ?? 0,
              },
              {
                label: 'Top Supplier',
                value: `${topSupplier?.supplierName} (${topSupplier?.noOfProducts})`,
              },

              {
                label: 'Bottom Supplier',
                value: `${bottomSupplier?.supplierName} (${bottomSupplier?.noOfProducts})`,
              },
            ]}
          />
          <Stats.Group
            heading="Products"
            stats={[
              {
                label: 'Total Products',
                value: totalProducts ?? 0,
              },
            ]}
          />
        </div>

        <div className="grid  grid-cols-1 items-center justify-center">
          <div className="overflow-hidden ">
            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              className="h-64"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
