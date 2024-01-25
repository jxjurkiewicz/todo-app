import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import dayjs from "dayjs";
import "dayjs/locale/en";

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
    <form id="add-form" onSubmit={onSubmit} className="pl-8">
      <div className="flex gap-4 mb-5">
        <input
          id="inputTask"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border-2 border-black border-opacity-30 rounded-xl p-4 shadow-lg flex-grow min-w-0"
          type="text"
          placeholder="Add your new task..."
        />
        <button
          type="submit"
          className="w-[60px] min-w-[60px] border-2 border-green-600 cursor-pointer hidden justify-center items-center rounded-xl hover:bg-green-600 shadow-md sm:flex"
        >
          <IoAdd className="icon-add w-10 h-10 text-green-600" />
        </button>
      </div>
      <div className="flex justify-start gap-5 mb-5">
        <div className="w-1/2 sm:w-auto">
          <input
            className={`border-2 border-black border-opacity-30 rounded-xl p-3 shadow-lg w-full text-center`}
            type="date"
            id="dateInput"
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div
          onClick={() => setPriority(!priority)}
          className={`w-1/2 sm:w-auto sm:min-w-32 flex justify-center items-center border-2 border-black border-opacity-30 rounded-xl p-3 shadow-lg cursor-pointer hover:border-red-500 ${
            priority && "bg-red-500 border-red-500"
          }`}
        >
          Priority
        </div>
      </div>

      <button
        type="submit"
        className="w-full border-2 border-green-600 cursor-pointer flex justify-center items-center rounded-xl hover:bg-green-600 shadow-md sm:hidden mb-10 py-2"
      >
        <IoAdd className="icon-add w-10 h-10 text-green-600" />
      </button>
    </form>
  );
};

export default AddTask;
