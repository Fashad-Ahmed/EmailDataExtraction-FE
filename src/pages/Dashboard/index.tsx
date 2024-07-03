import Stats from '@/components/molecules/stats';
import Card from '@/components/organisms/card';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';

export const chartOptions: Highcharts.Options = {
  chart: {
    type: 'pie',
    renderTo: 'container',
  },
  title: {
    text: 'Sample Circular Chart',
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: 'Browser share',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        ['Chrome', 12.8],
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7],
      ],
      type: 'pie',
    },
  ],
};

export default function Dashboard() {
  return (
    <Card heading="Stats">
      <div className="grid grid-cols-1 gap-5">
        <div className="grid  grid-cols-1 gap-5 md:grid-cols-3">
          <Stats.Group
            className="md:col-span-2"
            heading="Bookings"
            stats={[
              {
                label: 'Total Bookings',
                value: '3,654',
              },
              {
                label: 'In Progress',
                value: '190',
              },
              {
                label: 'Upcoming',
                value: '300',
              },
              {
                label: 'Completed',
                value: '3,164',
              },
            ]}
          />
          <Stats.Group
            heading="Profit"
            stats={[
              {
                label: 'Total Revenue',
                value: '$1144.00',
              },
              {
                label: 'Total Profits',
                value: '$540.00',
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
