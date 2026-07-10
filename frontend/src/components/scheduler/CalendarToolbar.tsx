type CalendarToolbarProps = {
  month: string;
  year?: number;
  onPrevious: () => void;
  onNext: () => void;
};

function CalendarToolbar({
  month,
  year,
  onPrevious,
  onNext,
}: CalendarToolbarProps) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-xl bg-slate-800 p-4">
      <button
        type="button"
        onClick={onPrevious}
        className="rounded-lg bg-slate-700 px-4 py-2 text-white transition hover:bg-violet-600"
      >
        ◀ Previous
      </button>

      <h2 className="text-2xl font-bold text-white">
        {month} {year}
      </h2>

      <button
        type="button"
        onClick={onNext}
        className="rounded-lg bg-slate-700 px-4 py-2 text-white transition hover:bg-violet-600"
      >
        Next ▶
      </button>
    </div>
  );
}

export default CalendarToolbar;