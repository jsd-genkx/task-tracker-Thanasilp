import { FormEvent, useState } from "react";

interface Task {
  id: number;
  task: string;
}

const FormInput = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  // Track which task is currently being edited
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  // Store the edited task value temporarily
  const [editedTask, setEditedTask] = useState("");

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (inputTask.trim()) {
      setTasks([...tasks, { id: tasks.length, task: inputTask }]);
      setInputTask("");
    }
  };

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const handleEditTask = (id: number) => {
    // Find the task to be edited
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      // Set the editedTask state with the task's original value
      setEditedTask(taskToEdit.task);
      // Set editingTaskId to identify the task being edited
      setEditingTaskId(id);
    }
  };

  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    if (editedTask.trim()) {
      // Update the task in the tasks list
      setTasks(
        tasks.map((task) =>
          task.id === editingTaskId ? { ...task, task: editedTask } : task
        )
      );
      // Reset editing state
      setEditingTaskId(null);
      setEditedTask("");
    }
  };

  const handleCancelEdit = () => {
    // Reset editing state without saving changes
    setEditingTaskId(null);
    setEditedTask("");
  };

  return (
    <>
      <form
        onSubmit={handleAddTask}
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
          type="submit"
          className=" bg-slate-700 text-white py-1 px-2 rounded-lg font-bold"
        >
          Add Task
        </button>
      </form>

      <section>
        {tasks.map((task) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              // Edit mode: Show input field and save/cancel buttons
              <form onSubmit={handleSaveEdit}>
                <input
                  type="text"
                  value={editedTask} // Use editedTask state for editing
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="border border-slate-600 rounded-md py-1 text-slate-700 pl-2"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white p-1 rounded-lg"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="bg-gray-400 text-white p-1 rounded-lg"
                >
                  Cancel
                </button>
              </form>
            ) : (
              // View mode: Show task text and edit button
              <>
                {task.task}
                <button
                  onClick={() => handleEditTask(task.id)}
                  className="bg-lime-600 text-white p-1 rounded-lg"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-800 text-white p-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </section>

      {/* My code
      <section>
        {tasks.map((task) => (
          <div key={task.id}>
            {task.task}{" "}
            <button
              onClick={handleEditTask}
              className="bg-lime-600 text-white p-1 rounded-lg"
            >
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
      </section> */}
    </>
  );
};

export default FormInput;
