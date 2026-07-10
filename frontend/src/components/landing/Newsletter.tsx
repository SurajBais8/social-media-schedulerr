import { Mail } from "lucide-react";

function Newsletter() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 p-[1px]">

          <div className="rounded-3xl bg-slate-950 px-8 py-16 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/20">
              <Mail className="text-violet-400" size={40} />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-white">
              Stay Updated
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Get AI marketing tips, product updates, feature releases,
              and exclusive early access directly in your inbox.
            </p>

            <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-violet-500"
              />

              <button
                className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Subscribe
              </button>

            </div>

            <p className="mt-6 text-sm text-slate-500">
              No spam. Unsubscribe anytime.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;