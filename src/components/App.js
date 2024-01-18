"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromApi = await fetchTasks();

      setTasks(tasksFromApi);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(
      "https://todo-app-4f75b-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
    );

    const data = await res.json();

    return data;
  };

  return (
    <div className="bg-white p-5 max-w-3xl mx-auto rounded-lg min-h-52">
      <Header />

      <div className="flex gap-4 mb-10">
        <input
          className="border border-black w-[92%] p-4"
          type="text"
          placeholder="Add your new task..."
        />
        {/* Add next + icon from next library */}
        <button className="w-[8%] border border-black">+</button>
      </div>

      {tasks.map((task) => (
        <Task text={task.text} key={task.id} />
      ))}
    </div>
  );
};

export default App;
