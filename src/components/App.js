"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";
import AddTask from "./AddTask";

import dayjs from "dayjs";
import "dayjs/locale/en";
import Loader from "./Loader/Loader";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksFromApi = await fetchTasks();
        setTasks(tasksFromApi);
      } finally {
        setLoading(false);
      }
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

  const addTask = async (task) => {
    await fetch(
      "https://todo-app-4f75b-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    const updatedTasks = await fetchTasks();

    setTasks(updatedTasks);
  };

  const deleteTask = async (taskId) => {
    const taskKey = Object.keys(tasks).find((key) => tasks[key].id === taskId);
    if (taskKey) {
      await fetch(
        `https://todo-app-4f75b-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskKey}.json`,
        {
          method: "DELETE",
        }
      );
    }

    const updatedTasks = await fetchTasks();

    setTasks(updatedTasks);
  };
  return (
    <div className="bg-white py-8 pl-1 pr-6 md:pl-3 md:pr-8 max-w-3xl mx-auto rounded-lg min-h-52 shadow-xl">
      <Header />

      <AddTask onAdd={addTask} />

      {loading ? (
        <Loader />
      ) : tasks === null ? (
        <div className="text-center py-14 text-xl italic text-red-700">
          No tasks assigned.
        </div>
      ) : (
        Object.values(tasks)
          .reverse()
          .map((task, index) => (
            <Task
              text={task.text}
              date={dayjs(task.date).format("DD-MM-YYYY")}
              priority={task.priority}
              key={index}
              id={task.id}
              onDelete={() => deleteTask(task.id)}
            />
          ))
      )}
    </div>
  );
};

export default App;
