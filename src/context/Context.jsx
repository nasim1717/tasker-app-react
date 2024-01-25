import { createContext, useContext, useReducer, useState } from "react";
import taskData from "../data/data.json";
import taskReducer from "../reducers/tasksReducer";

export const TasksContext = createContext(null);
// eslint-disable-next-line react/prop-types
export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, taskData);
  const [showModal, closeModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <TasksContext.Provider
      value={{
        tasks,
        dispatch,
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
