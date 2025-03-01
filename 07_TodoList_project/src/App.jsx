import "./App.css";
import { useEffect, useState } from "react";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Filter, NotebookPen } from "lucide-react";
import { UserContextProvider } from "./context/userContext";

function App() {
  const [tasks, setTasks] = useState([]);

  // const newTask = [];
  // newTask.push(2)

  const addTask = (newData) => {
    setTasks((prev) => [...prev, newData]);
  };

  useEffect(() => {
    console.log("tasks", tasks);

    /*const scrollHandler = () => {
      console.log("page scroll");
    };

    document.addEventListener("scroll", scrollHandler);
    const timer = setInterval(() => {
      console.log("calling timer");
    }, 1000);

    return () => {
      console.log("this will be called when navigate to another page");
      document.removeEventListener("scroll", scrollHandler);
      clearInterval(timer);
    };*/
  }, [tasks]);

  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;
