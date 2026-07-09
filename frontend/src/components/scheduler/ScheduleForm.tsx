import { useState } from "react";
import PlatformSelector from "./PlatformSelector";
import MediaUploader from "./MediaUploader";
import PostPreview from "./PostPreview";
import type { ScheduledPost } from "../../types/scheduledPost";

type ScheduleFormProps = {
  selectedDay: number;
  monthIndex: number;
  year: number;
  onSave: (post: ScheduledPost) => void;
  onClose: () => void;
};

function ScheduleForm({
  selectedDay,
  monthIndex,
  year,
  onSave,
  onClose,
}: ScheduleFormProps) {
  const [platform, setPlatform] = useState("Instagram");
  const [caption, setCaption] = useState("");
  const [scheduleDateTime, setScheduleDateTime] = useState("");
  const [imageName, setImageName] = useState("");

  const generateAICaption = () => {
    const captions = [
      "🚀 Unlock your potential with consistent content!",
      "✨ Stay consistent and grow your audience.",
      "🔥 Create. Schedule. Grow.",
      "📈 Great content builds great communities.",
      "💡 Consistency is the key to success.",
    ];

    const random =
      captions[Math.floor(Math.random() * captions.length)];

    setCaption(random);
  };

  const handleSchedule = () => {
    if (!caption.trim()) {
      alert("Please enter a caption.");
      return;
    }

    const post: ScheduledPost = {
      id: Date.now(),
      day: selectedDay,
      month: monthIndex,
      year,
      caption,
      platform,
      scheduleDateTime,
      imageName,
      status: "Scheduled",
    };

    onSave(post);
    onClose();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Left */}
      <div className="space-y-6">

        <div>
          <label className="mb-2 block font-medium text-white">
            Caption
          </label>

          <textarea
            rows={5}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write your caption..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none"
          />

          <button
            type="button"
            onClick={generateAICaption}
            className="mt-3 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500"
          >
            🤖 Generate AI Caption
          </button>
        </div>

        <PlatformSelector
          value={platform}
          onChange={setPlatform}
        />

        <div>
          <label className="mb-2 block font-medium text-white">
            Schedule Date & Time
          </label>

          <input
            type="datetime-local"
            value={scheduleDateTime}
            onChange={(e) => setScheduleDateTime(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          />
        </div>

        <MediaUploader
          onFileSelect={(name) => setImageName(name)}
        />

        <div className="flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-5 py-3 text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            className="rounded-xl bg-slate-700 px-5 py-3 text-white"
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSchedule}
            className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white"
          >
            Schedule Post
          </button>

        </div>
      </div>

      {/* Right */}

      <PostPreview
        caption={caption}
        platform={platform}
      />

    </div>
  );
}

export default ScheduleForm;