import Calendar from "../components/scheduler/Calendar";

function SchedulerPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-white">
        Content Scheduler
      </h1>

      <Calendar />
    </div>
  );
}

export default SchedulerPage;