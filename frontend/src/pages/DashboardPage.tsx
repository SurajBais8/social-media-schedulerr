import StatsCard from "../components/dashboard/StatsCard";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuickActions from "../components/dashboard/QuickActions";
import AIAssistant from "../components/dashboard/AIAssistant";

function DashboardPage() {
  return (
    <div>
      {/* Welcome */}
      <h2 className="text-4xl font-bold text-white">
        Welcome Back 👋
      </h2>

      <p className="mt-3 text-slate-400">
        Manage your posts, analytics, AI tools, and social media accounts
        from one dashboard.
      </p>

      {/* KPI Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Scheduled Posts"
          value="24"
          subtitle="This Month"
          color="violet"
        />

        <StatsCard
          title="Connected Accounts"
          value="5"
          subtitle="Active Platforms"
          color="cyan"
        />

        <StatsCard
          title="AI Generations"
          value="182"
          subtitle="Generated This Month"
          color="emerald"
        />

        <StatsCard
          title="Monthly Reach"
          value="1.2M"
          subtitle="+18% Growth"
          color="pink"
        />
      </div>

      {/* Analytics */}
      <AnalyticsChart />

      {/* Recent Activity + Quick Actions */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentActivity />
        <QuickActions />
      </div>

      {/* AI Assistant */}
      <div className="mt-8">
        <AIAssistant />
      </div>
    </div>
  );
}

export default DashboardPage;