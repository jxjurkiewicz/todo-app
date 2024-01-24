import { FaRegTrashAlt } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

export default function Task({ text, date, onDelete, priority }) {
  return (
    <div className="flex justify-between items-start">
      {priority ? (
        <div className="mr-3 mt-3">
          <FaExclamationCircle className="w-5 h-5 text-red-500" />
        </div>
      ) : (
        <div className="mr-3 w-5"></div>
      )}
      <div className="task text-sm rounded-md shadow-xl py-2 mb-4 flex justify-between items-start flex-1 px-4 w-full">
        <div>
          <div className="text-black text-opacity-70 text-[11px] italic">{date}</div>
          <div className="">{text}</div>
        </div>

        <button
          onClick={onDelete}
          className="delete-task cursor-pointer rounded-lg p-3 hover:bg-red-600 border-2 border-red-600 ml-5"
        >
          <FaRegTrashAlt className="delete-task-icon w-5 h-5 text-red-600 shadow-lg" />
        </button>
      </div>
    </div>
  );
}
