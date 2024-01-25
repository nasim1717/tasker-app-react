import { toast } from "react-toastify";
import { useTasks } from "../context/Context";
import TaskTags from "./TaskTags";

/* eslint-disable react/prop-types */
export default function TasksList({ task }) {
  const { closeModal, setUpdateData, dispatch } = useTasks();

  const handleEdit = (data) => {
    setUpdateData(data);
    closeModal(true);
  };

  const handleDelete = (id, title) => {
    const message = `Are you sure ${title} task delete`;
    if (confirm(message)) {
      dispatch({
        type: "DELETE",
        payload: {
          id: id,
        },
      });
      toast.success(`Successfully Delete Task`);
    }
  };

  const handleFavourite = (id) => {
    dispatch({ type: "FAVOURITE", payload: { id: id } });
  };

  return (
    <tr
      key={task.id}
      className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
    >
      <td onClick={() => handleFavourite(task.id)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-star"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke={task?.favourite ? "yellow" : "currentColor"}
          fill={task?.favourite ? "yellow" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      </td>
      <td>{task?.title}</td>
      <td>
        <div>{task?.description}</div>
      </td>
      <td>
        <TaskTags tags={task?.tags} />
      </td>
      <td className="text-center">{task?.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => handleDelete(task.id, task.title)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => handleEdit(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
