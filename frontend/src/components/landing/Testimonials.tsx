import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Marketing Manager",
    company: "Growthify",
    review:
      "This platform completely changed how our team manages social media. Scheduling posts across multiple platforms is now effortless.",
  },
  {
    name: "Michael Lee",
    role: "Content Creator",
    company: "Creator Studio",
    review:
      "The AI caption generator saves me hours every week. It's one of the best productivity tools I've used.",
  },
  {
    name: "Emily Carter",
    role: "Startup Founder",
    company: "LaunchLabs",
    review:
      "Beautiful interface, powerful analytics, and everything works from one dashboard. Highly recommended.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-violet-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Loved by Marketing Teams
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Thousands of creators, agencies, and businesses trust our platform
            to schedule content and grow faster.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {item.role}
                  </p>

                  <p className="text-sm text-violet-400">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;