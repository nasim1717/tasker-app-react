/* eslint-disable react/prop-types */
export default function TaskModalFooter({ onClose, updateData, setUpdateData }) {
  const handleClose = () => {
    setUpdateData(null);
    onClose(false);
  };
  return (
    <div className="mt-16 flex justify-center lg:mt-20">
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
      >
        {updateData ? "Update Task" : "Create new Task"}
      </button>
      <div className="pl-24">
        <div
          onClick={handleClose}
          className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80 cursor-pointer"
        >
          Close
        </div>
      </div>
    </div>
  );
}
