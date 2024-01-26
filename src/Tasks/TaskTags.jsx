/* eslint-disable react/prop-types */
export default function TaskTags({ tags }) {
  return (
    <ul className="flex justify-center gap-1.5 flex-wrap">
      {tags.split(",").map((tag) => {
        return (
          <li key={tag}>
            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] bg-[#00D991A1]">
              {tag}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
