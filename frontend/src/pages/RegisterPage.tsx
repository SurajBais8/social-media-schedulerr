import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Aurora Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <h1 className="text-center text-4xl font-bold text-white">
          Create Account 🚀
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Start managing your social media with AI.
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Create Account
          </button>
        </form>

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-white/10" />
          <span className="px-4 text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="space-y-3">
          <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10">
            Continue with Google
          </button>

          <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10">
            Continue with GitHub
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;