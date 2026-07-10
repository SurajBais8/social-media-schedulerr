import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-white">
              🚀 Social Media{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Scheduler
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              AI-powered social media scheduling platform for creators,
              agencies, and businesses. Plan, create, publish and analyze
              everything from one intelligent dashboard.
            </p>

            <div className="mt-8 flex gap-4">

              {[
                FaFacebook,
                FaInstagram,
                FaLinkedin,
                FaXTwitter,
                FaGithub,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
                >
                  <Icon className="text-lg text-white" />
                </a>
              ))}

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><a href="#" className="hover:text-violet-400">Dashboard</a></li>

              <li><a href="#" className="hover:text-violet-400">Scheduler</a></li>

              <li><a href="#" className="hover:text-violet-400">Analytics</a></li>

              <li><a href="#" className="hover:text-violet-400">AI Studio</a></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><a href="#" className="hover:text-violet-400">About Us</a></li>

              <li><a href="#" className="hover:text-violet-400">Careers</a></li>

              <li><a href="#" className="hover:text-violet-400">Blog</a></li>

              <li><a href="#" className="hover:text-violet-400">Contact</a></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><a href="#" className="hover:text-violet-400">Documentation</a></li>

              <li><a href="#" className="hover:text-violet-400">Help Center</a></li>

              <li><a href="#" className="hover:text-violet-400">Privacy Policy</a></li>

              <li><a href="#" className="hover:text-violet-400">Terms & Conditions</a></li>

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-slate-500">
              © {new Date().getFullYear()} Social Media Scheduler.
              All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-500">

              <a href="#" className="hover:text-violet-400">
                Privacy
              </a>

              <a href="#" className="hover:text-violet-400">
                Terms
              </a>

              <a href="#" className="hover:text-violet-400">
                Cookies
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;