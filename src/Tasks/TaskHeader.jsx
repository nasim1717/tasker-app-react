/* eslint-disable react/prop-types */
import TaskModal from "../TaskModal/TaskModal";
import TaskSearch from "./TaskSearch";

export default function TaskHeader({
  setTasks,
  tasks,
  onClose,
  showModal,
  updateData,
  setUpdateData,
  setSearchText,
  searchText,
}) {
  const handleAllDelete = () => {
    if (confirm(`Are your sure delete all the tasks`)) {
      setTasks([]);
    }
  };

  return (
    <>
      {showModal && (
        <TaskModal
          onClose={onClose}
          setTasks={setTasks}
          tasks={tasks}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
      )}
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <TaskSearch setSearchText={setSearchText} searchText={searchText} />
          <button
            onClick={() => onClose(true)}
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
