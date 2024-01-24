import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";
import TaskSearch from "./TaskSearch";

export default function TaskHeader() {
  const [showModal, closeModal] = useState(false);

  return (
    <>
      {showModal && <TaskModal onClose={closeModal} />}
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <TaskSearch />
          <button
            onClick={() => closeModal(true)}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>
          <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
            Delete All
          </button>
        </div>
      </div>
    </>
  );
}
