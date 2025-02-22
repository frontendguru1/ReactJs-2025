import "./App.css";
import { useEffect, useState } from "react";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newData) => {
    setTasks((prev) => [...prev, newData]);
  };

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  return (
    <>
      <h1>Todo List Manager</h1>
      <div className="todo-wrapper">
        <AddNewTask addTaskData={addTask} />
        <TaskList taskList={tasks} />
      </div>
    </>
  );
}

export default App;
