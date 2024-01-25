/* eslint-disable react/prop-types */
import TaskModal from "../TaskModal/TaskModal";
import { useTasks } from "../context/Context";
import TaskSearch from "./TaskSearch";

export default function TaskHeader() {
  const { setTasks, tasks, closeModal, showModal } = useTasks();

  const handleAllDelete = () => {
    if (confirm(`Are your sure delete all the tasks`)) {
      setTasks([]);
    }
  };

  return (
    <>
      {showModal && <TaskModal />}
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
          <button
            onClick={handleAllDelete}
            disabled={tasks.length === 0}
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
}
