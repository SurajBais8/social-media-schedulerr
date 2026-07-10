import { useState } from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Password updated successfully.");
    }, 1500);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-violet-500/20 p-5">
            <Lock className="text-violet-400" size={34} />
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold text-white">
          Reset Password
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Enter your new password below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showConfirm ? "🙈" : "👁"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white disabled:opacity-70"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

        </form>

        <p className="mt-8 text-center text-sm text-slate-400">
          <Link
            to="/login"
            className="text-violet-400 hover:text-violet-300"
          >
            Back to Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default ResetPasswordPage;