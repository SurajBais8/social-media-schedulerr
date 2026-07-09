import { useMemo, useState } from "react";
import CalendarToolbar from "./CalendarToolbar";
import CalendarDay from "./CalendarDay";
import CreatePostModal from "./CreatePostModal";
import ViewPostModal from "./ViewPostModal";
import type { ScheduledPost } from "../../types/scheduledPost";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([]);

  const [createOpen, setCreateOpen] = useState(false);

  const [viewOpen, setViewOpen] = useState(false);

  const [selectedPost, setSelectedPost] =
    useState<ScheduledPost | null>(null);

  const year = currentDate.getFullYear();

  const monthIndex = currentDate.getMonth();

  const month = currentDate.toLocaleString("default", {
    month: "long",
  });

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, monthIndex, 1).getDay();

    const totalDays = new Date(
      year,
      monthIndex + 1,
      0
    ).getDate();

    const cells: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      cells.push(i);
    }

    while (cells.length < 42) {
      cells.push(null);
    }

    return cells;
  }, [year, monthIndex]);

  function previousMonth() {
    setCurrentDate(new Date(year, monthIndex - 1, 1));
  }

  function nextMonth() {
    setCurrentDate(new Date(year, monthIndex + 1, 1));
  }

  function handleSave(post: ScheduledPost) {
    setScheduledPosts((prev) => [...prev, post]);
    setCreateOpen(false);
  }

  function handleUpdate(updated: ScheduledPost) {
    setScheduledPosts((prev) =>
      prev.map((post) =>
        post.id === updated.id ? updated : post
      )
    );

    setViewOpen(false);
  }

  function handleDelete(id: number) {
    setScheduledPosts((prev) =>
      prev.filter((post) => post.id !== id)
    );

    setViewOpen(false);
  }

  return (
    <>
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

        <CalendarToolbar
          month={month}
          year={year}
          onPrevious={previousMonth}
          onNext={nextMonth}
        />

        <div className="mb-4 grid grid-cols-7 gap-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="rounded-lg bg-slate-800 py-3 text-center font-semibold text-slate-300"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">

          {calendarDays.map((day, index) => {
            const post = scheduledPosts.find(
              (p) =>
                p.day === day &&
                p.month === monthIndex &&
                p.year === year
            );

            return (
              <div
                key={index}
                className="relative"
              >
                <CalendarDay
                  day={day}
                  selected={selectedDay === day}
                  onClick={() => {
                    if (day === null) return;

                    setSelectedDay(day);

                    if (post) {
                      setSelectedPost(post);
                      setViewOpen(true);
                    } else {
                      setCreateOpen(true);
                    }
                  }}
                />

                {post && (
                  <span className="absolute bottom-1 right-1 rounded-full bg-violet-600 px-2 py-1 text-[10px] text-white">
                    1 Post
                  </span>
                )}
              </div>
            );
          })}

        </div>

      </div>

      <CreatePostModal
        open={createOpen}
        selectedDay={selectedDay}
        month={month}
        monthIndex={monthIndex}
        year={year}
        onClose={() => setCreateOpen(false)}
        onSave={handleSave}
      />

      <ViewPostModal
        open={viewOpen}
        post={selectedPost}
        onClose={() => setViewOpen(false)}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Calendar;