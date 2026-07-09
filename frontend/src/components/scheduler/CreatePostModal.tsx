import ScheduleForm from "./ScheduleForm";
import type { ScheduledPost } from "../../types/scheduledPost";

type CreatePostModalProps = {
  open: boolean;
  selectedDay: number | null;
  month: string;
  monthIndex: number;
  year: number;
  onClose: () => void;
  onSave: (post: ScheduledPost) => void;
};

function CreatePostModal({
  open,
  selectedDay,
  month,
  monthIndex,
  year,
  onClose,
  onSave,
}: CreatePostModalProps) {
  if (!open || selectedDay === null) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-slate-900 p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Create New Post
            </h2>

            <p className="mt-2 text-slate-400">
              {selectedDay} {month} {year}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl text-slate-400 hover:text-white"
          >
            ×
          </button>

        </div>

        <ScheduleForm
          selectedDay={selectedDay}
          monthIndex={monthIndex}
          year={year}
          onSave={onSave}
          onClose={onClose}
        />

      </div>
    </div>
  );
}

export default CreatePostModal;