import type { ScheduledPost } from "../../types/scheduledPost";

type ViewPostModalProps = {
  open: boolean;
  post: ScheduledPost | null;
  onClose: () => void;
  onUpdate: (post: ScheduledPost) => void;
  onDelete: (id: number) => void;
};

function ViewPostModal({
  open,
  post,
  onClose,
  onUpdate,
  onDelete,
}: ViewPostModalProps) {
  if (!open || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-slate-900 p-8">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            Scheduled Post
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-slate-400 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-white">
              Platform
            </label>

            <div className="rounded-xl bg-slate-800 p-3 text-white">
              {post.platform}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-white">
              Caption
            </label>

            <div className="rounded-xl bg-slate-800 p-4 text-white min-h-[120px]">
              {post.caption}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-white">
              Schedule Time
            </label>

            <div className="rounded-xl bg-slate-800 p-3 text-white">
              {post.scheduleDateTime || "Not Selected"}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-white">
              Image
            </label>

            <div className="rounded-xl bg-slate-800 p-3 text-white">
              {post.imageName || "No Image"}
            </div>
          </div>

          <div className="flex justify-end gap-3">

            <button
              onClick={() => {
                onDelete(post.id);
                onClose();
              }}
              className="rounded-xl bg-red-600 px-5 py-3 text-white"
            >
              Delete
            </button>

            <button
              onClick={() => {
                onUpdate(post);
                onClose();
              }}
              className="rounded-xl bg-violet-600 px-5 py-3 text-white"
            >
              Close
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ViewPostModal;