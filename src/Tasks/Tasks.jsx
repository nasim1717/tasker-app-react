import { useState } from "react";
import taskData from "../data/data.json";
import TaskHeader from "./TaskHeader";
import TaskTable from "./TaskTable";

export default function Tasks() {
  const [tasks, setTasks] = useState(taskData);
  const [showModal, closeModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [searchText, setSearchText] = useState("");
  return (
    <section className="mb-20" id="tasks">
      <div className="">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader
            setTasks={setTasks}
            tasks={tasks}
            onClose={closeModal}
            showModal={showModal}
            updateData={updateData}
            setUpdateData={setUpdateData}
            setSearchText={setSearchText}
            searchText={searchText}
          />
          <div className="overflow-auto">
            <TaskTable
              tasks={tasks}
              onClose={closeModal}
              setUpdateData={setUpdateData}
              setTasks={setTasks}
              searchText={searchText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
