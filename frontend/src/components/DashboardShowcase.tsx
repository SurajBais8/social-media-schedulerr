import {
  CalendarDays,
  BarChart3,
  Bell,
  Bot,
  Play,
  Camera,
} from "lucide-react";

function DashboardShowcase() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-violet-400">
            Dashboard
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Everything In One Place
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Manage every platform with one intelligent dashboard powered by AI.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="grid gap-6 lg:grid-cols-3">

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <BarChart3 className="mb-4 text-violet-400" size={36} />
              <h3 className="text-xl font-semibold text-white">
                Analytics
              </h3>
              <p className="mt-2 text-slate-400">
                Engagement increased by 18% this month.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <CalendarDays className="mb-4 text-cyan-400" size={36} />
              <h3 className="text-xl font-semibold text-white">
                Content Calendar
              </h3>
              <p className="mt-2 text-slate-400">
                24 posts are already scheduled.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <Bot className="mb-4 text-emerald-400" size={36} />
              <h3 className="text-xl font-semibold text-white">
                AI Assistant
              </h3>
              <p className="mt-2 text-slate-400">
                12 new caption suggestions are ready.
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Connected Accounts
                </h3>

                <Bell className="text-slate-400" />
              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
                  <div className="flex items-center gap-3">
                    <Play className="text-red-500" />
                    <span className="text-white">YouTube</span>
                  </div>

                  <span className="text-emerald-400">
                    Connected
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
                  <div className="flex items-center gap-3">
                    <Camera className="text-pink-500" />
                    <span className="text-white">Instagram</span>
                  </div>

                  <span className="text-emerald-400">
                    Connected
                  </span>
                </div>

              </div>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <h3 className="mb-6 text-xl font-semibold text-white">
                Growth
              </h3>

              <div className="flex h-52 items-end gap-3">

                {[40, 90, 60, 120, 85, 150, 110].map((value, index) => (
                  <div
                    key={index}
                    className="w-full rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-400"
                    style={{ height: `${value}px` }}
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardShowcase;