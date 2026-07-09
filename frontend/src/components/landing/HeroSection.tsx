import { motion } from "framer-motion";
import { Play } from "lucide-react";
import DashboardPreview from "./DashboardPreview";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Aurora Background */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
           AI Powered Social Media Scheduler
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Create.
          <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Schedule.{" "}
          </span>
          Analyze.
          <br />
          Grow Faster.
        </motion.h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-400">
          Manage Instagram, Facebook, LinkedIn, X and YouTube from one
          intelligent AI-powered dashboard.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {/* Start Free Button */}
          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-cyan-500/40">
            Start Free
          </button>

          {/* Watch Demo Button */}
          <button className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white/10">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-slate-950 transition-transform duration-300 group-hover:scale-110">
              <Play size={16} fill="currentColor" />
            </span>

            Watch Demo
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
          <div>
            ⭐⭐⭐⭐⭐ <span className="ml-2">25,000+ Creators</span>
          </div>

          <div>📅 1M+ Scheduled Posts</div>

          <div>🤖 AI Powered</div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}

export default HeroSection;