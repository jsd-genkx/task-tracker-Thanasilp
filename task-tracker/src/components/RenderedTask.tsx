import { useState } from "react";

interface Task {
  id: number;
  task: string;
}

const RenderedTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.task}{" "}
          <button className="bg-lime-600 text-white p-1 rounded-lg">
            Edit
          </button>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="bg-red-800 text-white p-1 rounded-lg"
          >
            Delete
          </button>{" "}
        </div>
      ))}
    </section>
  );
};

export default RenderedTask;
