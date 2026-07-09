import {
  CalendarDays,
  Bot,
  BarChart3,
  Camera,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Instagram post scheduled",
    time: "5 minutes ago",
    icon: CalendarDays,
    color: "text-violet-400",
  },
  {
    id: 2,
    title: "AI generated new caption",
    time: "18 minutes ago",
    icon: Bot,
    color: "text-cyan-400",
  },
  {
    id: 3,
    title: "Analytics report updated",
    time: "1 hour ago",
    icon: BarChart3,
    color: "text-emerald-400",
  },
  {
    id: 4,
    title: "Instagram account connected",
    time: "Yesterday",
    icon: Camera,
    color: "text-pink-400",
  },
];

function RecentActivity() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-slate-800 p-3">
                <Icon
                  size={20}
                  className={activity.color}
                />
              </div>

              <div className="flex-1">
                <p className="font-medium text-white">
                  {activity.title}
                </p>

                <p className="text-sm text-slate-400">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivity;