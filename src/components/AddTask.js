import { useState } from "react";
import { IoAdd } from "react-icons/io5";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(false);
  const [date, setDate] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("You can't add empty task!");
      return;
    }

    const id = Math.floor(Math.random() * 100000) + 1;

    onAdd({ id, text, priority });

    setText("");
    setPriority(false);
  };

  const style = { height: "50px", width: "50px" };

  return (
    <form id="add-form" onSubmit={onSubmit}>
      <div className="flex gap-4 mb-5">
        <input
          id="inputTask"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border-2 border-black border-opacity-30 rounded-xl w-[92%] p-4 shadow-lg"
          type="text"
          placeholder="Add your new task..."
        />
        {/* Add next + icon from next library */}
        <button
          type="submit"
          className="w-[8%] border-2 border-green-600 cursor-pointer flex justify-center items-center rounded-xl hover:bg-green-600 shadow-md"
        >
          <IoAdd className="icon-add w-10 h-10 text-green-600" />
        </button>
      </div>
      <div className="flex justify-between mb-10">
        <div>Set Date:</div>

        <div className="flex">
          <h2>Priority</h2>
          <input
            checked={priority}
            onChange={() => setPriority(!priority)}
            type="checkbox"
          />
        </div>
      </div>
    </form>
  );
};

export default AddTask;
