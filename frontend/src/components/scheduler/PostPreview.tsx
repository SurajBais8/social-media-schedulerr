type PostPreviewProps = {
  caption?: string;
  platform?: string;
};

function PostPreview({
  caption = "Your caption will appear here...",
  platform = "Instagram",
}: PostPreviewProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
      <h3 className="mb-5 text-xl font-bold text-white">
        Live Preview
      </h3>

      <div className="rounded-xl bg-slate-900 p-5">

        {/* Header */}
        <div className="mb-4 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
            SM
          </div>

          <div>
            <p className="font-semibold text-white">
              Social Scheduler
            </p>

            <p className="text-sm text-slate-400">
              {platform}
            </p>
          </div>

        </div>

        {/* Image Placeholder */}
        <div className="mb-4 flex h-56 items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-700 text-slate-400">
          Image Preview
        </div>

        {/* Caption */}
        <p className="leading-7 text-slate-200">
          {caption}
        </p>

      </div>
    </div>
  );
}

export default PostPreview;