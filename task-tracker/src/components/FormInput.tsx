import { useState } from "react";

const FormInput = () => {
  const [inputTask, setInputTask] = useState({
    id: Date.now(),
    task: "",
  });

  const handleTask = (e) => {
    const newTask = e.target.value;
    console.log("New task:", newTask);
    setInputTask({
      ...inputTask,
      task: e.target.value,
    });
  };

  return (
    <form
      action=""
      className="flex items-center text-xl justify-center p-4 gap-2"
    >
      <input
        type="text"
        value={inputTask.task}
        onChange={handleTask}
        placeholder="Please fill your task"
        className="border border-slate-600 rounded-md py-1 text-slate-700 pl-2"
      />
      <button className=" bg-slate-600 text-white py-1 px-2 rounded-lg">
        Add Task
      </button>
    </form>
  );
};

export default FormInput;
