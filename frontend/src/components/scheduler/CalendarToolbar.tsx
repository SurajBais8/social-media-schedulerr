type CalendarToolbarProps = {
  month: string;
  onPrevious: () => void;
  onNext: () => void;
};

function CalendarToolbar({
  month,
  onPrevious,
  onNext,
}: CalendarToolbarProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <button
        onClick={onPrevious}
        className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
      >
        ← Previous
      </button>

      <h2 className="text-3xl font-bold text-white">
        {month}
      </h2>

      <button
        onClick={onNext}
        className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
      >
        Next →
      </button>
    </div>
  );
}

export default CalendarToolbar;