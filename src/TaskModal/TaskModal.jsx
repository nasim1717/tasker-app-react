/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks } from "../context/Context";
import { getNextId, inputValidationCheck } from "../utils/utils";
import TaskModalFooter from "./TaskModalFooter";
import TaskModalInputFields from "./TaskModalInputFields";

export default function TaskModal() {
  const { closeModal, setTasks, tasks, updateData, setUpdateData } = useTasks();

  const initialFormData = updateData
    ? updateData
    : { id: getNextId(tasks), title: "", description: "", tags: "", priority: "" };

  const [taskFormData, setTaskFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValidationCheck(taskFormData)) {
      toast.error("Please fill up the all input fields", {
        position: "top-right",
      });
    } else {
      if (updateData) {
        setTasks(
          tasks.map((item) => {
            if (item.id === updateData.id) {
              return { ...taskFormData };
            }
            return item;
          })
        );
        toast.success("Succesfully updated task", {
          position: "top-right",
        });
      } else {
        setTasks([...tasks, { ...taskFormData }]);
        toast.success("Succesfully created a new task", {
          position: "top-right",
        });
      }
      setUpdateData(null);
      closeModal(false);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full  max-md:px-4 max-h-[99vh] overflow-auto">
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
        >
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {updateData ? "Update Task" : "Add New Task"}
          </h2>
          <TaskModalInputFields taskFormData={taskFormData} setTaskFormData={setTaskFormData} />
          <TaskModalFooter />
        </form>
      </div>
    </div>
  );
}
