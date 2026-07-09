function DashboardPreview() {
  return (
    <div className="relative mt-16 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          Dashboard Overview
        </h3>

        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
          ● Live
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-900/70 p-5">
          <p className="text-slate-400">Followers</p>
          <h2 className="mt-2 text-3xl font-bold text-white">128.4K</h2>
          <p className="mt-2 text-emerald-400">+12.8%</p>
        </div>

        <div className="rounded-2xl bg-slate-900/70 p-5">
          <p className="text-slate-400">Scheduled Posts</p>
          <h2 className="mt-2 text-3xl font-bold text-white">48</h2>
          <p className="mt-2 text-cyan-400">Next: 2:30 PM</p>
        </div>

        <div className="rounded-2xl bg-slate-900/70 p-5">
          <p className="text-slate-400">AI Suggestions</p>
          <h2 className="mt-2 text-3xl font-bold text-white">12</h2>
          <p className="mt-2 text-violet-400">Ready</p>
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-900/70 p-6">

        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white">
            Engagement
          </h4>

          <span className="text-cyan-400">
            Last 30 Days
          </span>
        </div>

        <div className="flex h-48 items-end justify-between gap-3">

          {[35, 60, 40, 90, 55, 120, 80].map((value, index) => (
            <div
              key={index}
              className="w-full rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-400"
              style={{ height: `${value}px` }}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default DashboardPreview;