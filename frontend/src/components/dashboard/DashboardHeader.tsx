import { Bell, LogOut, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

function DashboardHeader() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-slate-900/60 px-6 backdrop-blur-xl">

      {/* Left Side */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-slate-400">
          Welcome back, Suraj 👋
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-xl border border-white/10 bg-slate-800 py-2 pl-10 pr-4 text-white outline-none focus:border-violet-500"
          />

        </div>

        {/* Notification */}
        <button className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 font-semibold text-white">
          Profile
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}

export default DashboardHeader;