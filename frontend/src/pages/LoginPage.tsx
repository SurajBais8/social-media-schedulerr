import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";   



function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
const { login } = useAuth();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    // Temporary loading (Backend Integration Later)
    setTimeout(() => {
  login("test-token");
  setLoading(false);
  navigate("/dashboard");
}, 1500);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

        {/* Title */}

        <h1 className="text-center text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Login to continue managing your social media.
        </p>

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />

          {/* Password */}

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 pr-12 text-white outline-none transition focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-slate-400">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-600 bg-slate-900"
              />

              Remember Me

            </label>

            <Link
  to="/forgot-password"
  className="text-sm text-violet-400 hover:text-violet-300"
>
  Forgot Password?
</Link>

          </div>

          {/* Login */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        {/* Divider */}

        <div className="my-8 flex items-center">

          <div className="h-px flex-1 bg-white/10" />

          <span className="px-4 text-sm text-slate-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>

        {/* Social Login */}

        <div className="space-y-3">

          <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10">
            Continue with Google
          </button>

          <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10">
            Continue with GitHub
          </button>

        </div>

        {/* Register */}

        <p className="mt-8 text-center text-sm text-slate-400">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}

export default LoginPage;