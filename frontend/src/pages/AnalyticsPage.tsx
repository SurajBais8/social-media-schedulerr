import StatsCard from "../components/dashboard/StatsCard";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";

function AnalyticsPage() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">
        Analytics
      </h2>

      <p className="mt-3 text-slate-400">
        Monitor your social media performance across all connected platforms.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Reach"
          value="1.8M"
          subtitle="+12% This Month"
          color="violet"
        />

        <StatsCard
          title="Engagement"
          value="89K"
          subtitle="+8% This Month"
          color="cyan"
        />

        <StatsCard
          title="Followers"
          value="52K"
          subtitle="+2.3K"
          color="emerald"
        />

        <StatsCard
          title="Clicks"
          value="14K"
          subtitle="+18%"
          color="pink"
        />
      </div>

      <div className="mt-10">
        <AnalyticsChart />
      </div>
    </div>
  );
}

export default AnalyticsPage;