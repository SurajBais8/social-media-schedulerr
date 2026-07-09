import { Sparkles, SendHorizontal } from "lucide-react";

const suggestions = [
  "Generate an Instagram caption",
  "Create a 7-day content plan",
  "Suggest trending hashtags",
  "Write a LinkedIn post",
];

function AIAssistant() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-violet-600 p-3">
          <Sparkles className="text-white" size={22} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            AI Assistant
          </h3>

          <p className="text-sm text-slate-400">
            Generate content with AI
          </p>
        </div>
      </div>

      {/* Chat Preview */}
      <div className="rounded-xl bg-slate-900 p-4">
        <div className="mb-4 rounded-xl bg-violet-600/20 p-3 text-sm text-slate-200">
          👋 Hi Suraj! How can I help you today?
        </div>

        <div className="rounded-xl bg-slate-800 p-3 text-sm text-slate-300">
          Try one of the suggestions below.
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-6 space-y-3">
        {suggestions.map((item) => (
          <button
            key={item}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-left text-white transition hover:border-violet-500 hover:bg-slate-800"
          >
            ✨ {item}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="mt-6 flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask AI anything..."
          className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
        />

        <button className="rounded-xl bg-violet-600 p-3 transition hover:bg-violet-500">
          <SendHorizontal className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
}

export default AIAssistant;