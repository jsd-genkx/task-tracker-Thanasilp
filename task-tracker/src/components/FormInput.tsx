import { useState } from "react";

const FormInput = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputTask.trim()) {
      setTasks([...tasks, { id: tasks.length, task: inputTask }]);
      setInputTask("");
    }
  };

  return (
    <>
      <form
        action=""
        className="flex items-center text-xl justify-center p-4 gap-2"
      >
        <input
          type="text"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Please fill your task"
          className="border border-slate-600 rounded-md py-1 text-slate-700 pl-2"
        />
        <button
          onClick={handleAddTask}
          className=" bg-slate-700 text-white py-1 px-2 rounded-lg font-bold"
        >
          Add Task
        </button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.task}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default FormInput;
