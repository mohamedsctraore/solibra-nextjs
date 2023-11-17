import WebsiteMetrics from '@/app/shared/analytics-dashboard/website-metrics/table-widget';
import StatCards from '@/app/shared/analytics-dashboard/stat-cards';
import UserMetrics from '@/app/shared/analytics-dashboard/user-metrics';

export default function AnalyticsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
        <StatCards className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />

        <UserMetrics className="@4xl:col-span-2 @7xl:col-span-12" />

        <WebsiteMetrics className="@4xl:col-span-2 @7xl:col-span-12" />
      </div>
    </div>
  );
}
