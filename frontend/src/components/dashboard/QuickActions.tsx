import {
  Plus,
  Bot,
  CalendarDays,
  BarChart3,
} from "lucide-react";

const actions = [
  {
    title: "Create Post",
    icon: Plus,
    color: "bg-violet-600 hover:bg-violet-500",
  },
  {
    title: "AI Caption",
    icon: Bot,
    color: "bg-cyan-600 hover:bg-cyan-500",
  },
  {
    title: "Schedule",
    icon: CalendarDays,
    color: "bg-emerald-600 hover:bg-emerald-500",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    color: "bg-pink-600 hover:bg-pink-500",
  },
];

function QuickActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className={`flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-white transition-all duration-300 hover:scale-105 ${action.color}`}
            >
              <Icon size={30} />
              <span className="font-medium">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;