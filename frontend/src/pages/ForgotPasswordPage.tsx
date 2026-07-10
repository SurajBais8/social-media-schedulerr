import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Password reset link sent successfully.");
    }, 1500);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

        <Link
          to="/login"
          className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Login
        </Link>

        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-violet-500/20 p-5">
            <Mail className="text-violet-400" size={34} />
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold text-white">
          Forgot Password
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Enter your email address and we'll send you a password reset link.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

      </div>

    </div>
  );
}

export default ForgotPasswordPage;