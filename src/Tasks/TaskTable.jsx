import { useState } from "react";
import taskData from "../data/data.json";
import TasksList from "./TasksList";

export default function TaskTable() {
  const [tasks, setTasks] = useState(taskData);
  return (
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
      <tbody>
        {tasks.map((task) => (
          <TasksList key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
}
