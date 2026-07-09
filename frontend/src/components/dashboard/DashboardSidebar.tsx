import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Scheduler",
    icon: CalendarDays,
    path: "/scheduler",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "AI Studio",
    icon: Bot,
    path: "/ai-studio",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function DashboardSidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-slate-900/80 backdrop-blur-xl">
      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold text-white">
           Social Scheduler
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="font-medium text-white">Suraj Kumar</p>
          <p className="text-sm text-slate-400">
            Java Full Stack Developer
          </p>
        </div>
      </div>
    </aside>
  );
}

export default DashboardSidebar;