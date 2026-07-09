import {
  Bot,
  CalendarDays,
  BarChart3,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Content Assistant",
    description:
      "Generate captions, hashtags and content ideas with built-in AI.",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description:
      "Schedule content across multiple platforms from one calendar.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track engagement, reach and audience growth in real time.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite team members and manage approvals easily.",
  },
  {
    icon: Sparkles,
    title: "Automation",
    description:
      "Automate repetitive publishing workflows to save time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Enterprise-grade security with protected account connections.",
  },
];

function FeaturesSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-violet-400 font-semibold uppercase tracking-[0.3em]">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Everything You Need to Grow Faster
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Manage every social media platform from one intelligent dashboard
            powered by automation and AI.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-violet-600/20 p-4">
                  <Icon className="h-8 w-8 text-violet-400" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;