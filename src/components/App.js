import Header from "./Header";
import Task from "./Task";

const App = () => {
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

      <Task title="Create new project in React" />

      <Task title="Buy a new laptop" />
    </div>
  );
};

export default App;
