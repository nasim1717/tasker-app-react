/* eslint-disable react/prop-types */
import TasksList from "./TasksList";

export default function TaskTable({ tasks, onClose, setUpdateData, setTasks, searchText }) {
  let content = null;
  if (searchText) {
    content = tasks.map((task) => {
      if (task.title.toLowerCase().includes(searchText.toLowerCase())) {
        return (
          <TasksList
            key={task.id}
            task={task}
            onClose={onClose}
            setUpdateData={setUpdateData}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      }
    });
  } else {
    content = tasks.map((task) => (
      <TasksList
        key={task.id}
        task={task}
        onClose={onClose}
        setUpdateData={setUpdateData}
        tasks={tasks}
        setTasks={setTasks}
      />
    ));
  }
  return (
    <>
      {" "}
      {content.length > 0 ? (
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      ) : (
        <h1 className="text-xl font-semibold max-sm:mb-4 text-center mt-3">Task List is empty!</h1>
      )}
    </>
  );
}
