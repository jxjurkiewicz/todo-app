import { FaRegTrashAlt } from "react-icons/fa";

export default function Task({ text, onDelete }) {
  return (
    <div className="task w-full rounded-md shadow-xl py-2 px-4 mb-4 flex justify-between items-center">
      <div>{text}</div>

      <button onClick={onDelete} className="cursor-pointer rounded-lg p-3 bg-red-600">
        <FaRegTrashAlt className="w-5 h-5" />
      </button>
    </div>
  );
}
