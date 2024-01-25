import { createContext, useContext, useState } from "react";
import taskData from "../data/data.json";

export const TasksContext = createContext(null);
// eslint-disable-next-line react/prop-types
export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(taskData);
  const [showModal, closeModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [searchText, setSearchText] = useState("");
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        showModal,
        closeModal,
        updateData,
        setUpdateData,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
