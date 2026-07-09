function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Sign in to your account
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white transition hover:scale-[1.02]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;