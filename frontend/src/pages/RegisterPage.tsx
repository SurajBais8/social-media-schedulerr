import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (!acceptTerms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Register Clicked");
    }, 1500);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

        <h1 className="text-center text-4xl font-bold text-white">
          Create Account 🚀
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Start managing your social media with AI.
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 pr-12 text-white outline-none focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

          <div className="relative">

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 pr-12 text-white outline-none focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <label className="flex items-center gap-3 text-sm text-slate-400">

            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />

            I agree to the Terms & Privacy Policy

          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="my-8 flex items-center">

          <div className="h-px flex-1 bg-white/10" />

          <span className="px-4 text-sm text-slate-500">
            OR
          </span>

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