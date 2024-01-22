import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import dayjs from "dayjs";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(false);
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("You can't add empty task!");
      return;
    }

    const id = Math.floor(Math.random() * 100000) + 1;

    onAdd({ id, text, priority, date });

    setText("");
    setPriority(false);
    setDate(dayjs().format("YYYY-MM-DD"));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

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
        <button
          type="submit"
          className="w-[8%] border-2 border-green-600 cursor-pointer flex justify-center items-center rounded-xl hover:bg-green-600 shadow-md"
        >
          <IoAdd className="icon-add w-10 h-10 text-green-600" />
        </button>
      </div>
      <div className="flex justify-start gap-5 mb-10">
        <div>
          {/* <label htmlFor="dateInput">Date:</label> */}
          <input
            className="border-2 border-black border-opacity-30 rounded-xl p-3 shadow-lg"
            type="date"
            id="dateInput"
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div className="flex items-center border-2 border-black border-opacity-30 rounded-xl p-3 shadow-lg">
          <h2>Priority</h2>
          <input
            checked={priority}
            onChange={() => setPriority(!priority)}
            type="checkbox"
            className="mx-2"
          />
        </div>
      </div>
    </form>
  );
};

export default AddTask;
