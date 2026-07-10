import { Mail, MapPin, Phone } from "lucide-react";

function ContactSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-violet-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            We'd love to hear from you. Send us a message and our team will
            get back to you as soon as possible.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">

              <Mail className="text-violet-400" size={28} />

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Email
                </h3>

                <p className="mt-2 text-slate-400">
                  support@schedulerai.com
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">

              <Phone className="text-cyan-400" size={28} />

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Phone
                </h3>

                <p className="mt-2 text-slate-400">
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">

              <MapPin className="text-emerald-400" size={28} />

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Office
                </h3>

                <p className="mt-2 text-slate-400">
                  Gurugram, Haryana, India
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <form className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-violet-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;