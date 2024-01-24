import TaskHeader from "./TaskHeader";
import TaskTable from "./TaskTable";

export default function Tasks() {
  return (
    <section className="mb-20" id="tasks">
      <div className="">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader />
          <div className="overflow-auto">
            <TaskTable />
          </div>
        </div>
      </div>
    </section>
  );
}
