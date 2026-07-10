import { Bell } from "lucide-react";

const notifications = [
  {
    title: "Instagram Post Published",
    description: "Your scheduled post was published successfully.",
    time: "5 min ago",
  },
  {
    title: "AI Caption Generated",
    description: "Your AI caption is ready to use.",
    time: "20 min ago",
  },
  {
    title: "Weekly Analytics Ready",
    description: "Your weekly performance report is available.",
    time: "2 hours ago",
  },
  {
    title: "New Login",
    description: "Your account was accessed from a new device.",
    time: "Yesterday",
  },
];

function NotificationsPage() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">
        Notifications
      </h2>

      <p className="mt-3 text-slate-400">
        Stay updated with your latest activities.
      </p>

      <div className="mt-10 space-y-4">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5"
          >
            <div className="rounded-full bg-violet-600/20 p-3">
              <Bell className="text-violet-400" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-slate-400">
                {item.description}
              </p>
            </div>

            <span className="text-sm text-slate-500">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsPage;
