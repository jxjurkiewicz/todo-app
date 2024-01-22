import { FaRegTrashAlt } from "react-icons/fa";

export default function Task({ text, date, onDelete }) {
  return (
    <div className="task w-full rounded-md shadow-xl py-2 px-4 mb-4 flex justify-between items-center">
      <div>
        <div className="text-xs italic">{date}</div>
        <div>{text}</div>
      </div>

      <button
        onClick={onDelete}
        className="delete-task cursor-pointer rounded-lg p-3 hover:bg-red-600 border-2 border-red-600"
      >
        <FaRegTrashAlt className="delete-task-icon w-5 h-5 text-red-600 shadow-lg" />
      </button>
    </div>
  );
}
