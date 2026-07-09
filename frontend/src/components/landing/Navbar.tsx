import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          🚀 Social Media Scheduler
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-slate-300 transition hover:text-white"
          >
            Features
          </Link>

          <Link
            to="/"
            className="text-slate-300 transition hover:text-white"
          >
            AI Studio
          </Link>

          <Link
            to="/pricing"
            className="text-slate-300 transition hover:text-white"
          >
            Pricing
          </Link>

          <Link
            to="/"
            className="text-slate-300 transition hover:text-white"
          >
            Resources
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
  to="/register"
  className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:scale-105"
>
  Start Free
</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;