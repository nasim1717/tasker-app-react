/* eslint-disable react/prop-types */
export default function TaskModalInputFields({ taskFormData, setTaskFormData }) {
  return (
    <div className="space-y-9 text-white lg:space-y-10">
      <div className="space-y-2 lg:space-y-3">
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setTaskFormData({ ...taskFormData, title: e.target.value })}
          value={taskFormData.title}
          className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className="space-y-2 lg:space-y-3">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={(e) => setTaskFormData({ ...taskFormData, description: e.target.value })}
          value={taskFormData.description}
          className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
          type="text"
          name="description"
          id="description"
        ></textarea>
      </div>
      <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="tags">Tags</label>
          <input
            onChange={(e) => setTaskFormData({ ...taskFormData, tags: e.target.value })}
            value={taskFormData.tags}
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="tags"
            id="tags"
          />
        </div>

        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="priority">Priority</label>
          <select
            onChange={(e) => setTaskFormData({ ...taskFormData, priority: e.target.value })}
            value={taskFormData.priority}
            className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
            name="priority"
            id="priority"
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
    </div>
  );
}
