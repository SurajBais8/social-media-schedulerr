import { Bot, Hash, Lightbulb, PenSquare } from "lucide-react";

const tools = [
  {
    title: "AI Caption Generator",
    description: "Generate engaging captions for your posts.",
    icon: PenSquare,
  },
  {
    title: "Hashtag Generator",
    description: "Create trending hashtags for better reach.",
    icon: Hash,
  },
  {
    title: "Content Ideas",
    description: "Get fresh ideas for your next post.",
    icon: Lightbulb,
  },
  {
    title: "AI Assistant",
    description: "Ask AI anything about social media growth.",
    icon: Bot,
  },
];

function AIStudioPage() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">
        AI Studio
      </h2>

      <p className="mt-3 text-slate-400">
        Use AI tools to generate captions, hashtags, and content ideas.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-violet-500"
            >
              <Icon className="mb-4 text-violet-400" size={36} />

              <h3 className="text-xl font-semibold text-white">
                {tool.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {tool.description}
              </p>

              <button className="mt-6 rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700">
                Open Tool
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AIStudioPage;