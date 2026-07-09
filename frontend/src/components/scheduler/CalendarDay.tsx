type CalendarDayProps = {
  day: number | null;
  selected: boolean;
  onClick: () => void;
};

function CalendarDay({
  day,
  selected,
  onClick,
}: CalendarDayProps) {
  return (
    <button
      type="button"
      disabled={day === null}
      onClick={onClick}
      className={`
        flex aspect-square w-full items-start justify-start rounded-xl
        border p-3 text-sm font-medium transition-all duration-200

        ${
          day === null
            ? "cursor-default border-transparent bg-transparent"
            : selected
            ? "border-violet-500 bg-violet-600 text-white shadow-lg"
            : "border-slate-700 bg-slate-800 text-white hover:border-violet-500 hover:bg-slate-700"
        }
      `}
    >
      {day}
    </button>
  );
}

export default CalendarDay;