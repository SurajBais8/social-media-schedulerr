import {
  Bot,
  Sparkles,
  PenSquare,
  Hash,
  Video,
  Clock,
} from "lucide-react";

const tools = [
  {
    icon: PenSquare,
    title: "AI Caption Generator",
    description: "Generate engaging captions for every platform in seconds.",
  },
  {
    icon: Hash,
    title: "Hashtag Generator",
    description: "Find trending hashtags to increase your reach.",
  },
  {
    icon: Video,
    title: "Video Ideas",
    description: "Get AI-powered content ideas for Shorts, Reels and TikTok.",
  },
  {
    icon: Clock,
    title: "Best Posting Time",
    description: "Know the best time to publish based on audience activity.",
  },
];

function AIStudioSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-violet-300">
            <Bot size={18} />
            AI Studio
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Create Better Content with AI
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Powerful AI tools that help you create captions, hashtags,
            content ideas and publishing strategies in seconds.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-violet-600/20 p-4">
                  <Icon className="h-8 w-8 text-violet-400" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {tool.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {tool.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-violet-400">
                  <Sparkles size={18} />
                  AI Powered
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default AIStudioSection;