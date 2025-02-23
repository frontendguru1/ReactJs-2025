import "./App.css";
import { useEffect, useState } from "react";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Filter, NotebookPen } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([]);

  // const newTask = [];
  // newTask.push(2)

  const addTask = (newData) => {
    setTasks((prev) => [...prev, newData]);
  };

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  return (
    <div className="app-container">
      {/* sidebar */}
      <Sidebar />

      {/* Content */}

      <div className="content-wrapper">
        <Header />

        <div className="controls-wrapper">
          <div className="filter">
            <button>
              <Filter /> Filter{" "}
            </button>
          </div>
          <div className="add-new-task">
            <button>
              <NotebookPen /> Add a New Task
            </button>
          </div>
        </div>

        <div className="todo-wrapper">
          <AddNewTask addTaskData={addTask} />

          <TaskList taskList={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
