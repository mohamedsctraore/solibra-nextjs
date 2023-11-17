import SimpleLineChart from '@/app/shared/chart-widgets/simple-line-chart';
import SimpleBarChart from '@/app/shared/chart-widgets/simple-bar-chart';

export default function ChartWidgets() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 3xl:gap-8">
      <SimpleLineChart />
      <SimpleLineChart />
      <SimpleBarChart />
      <SimpleBarChart />
    </div>
  );
}
