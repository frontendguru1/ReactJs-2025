import "./App.css";
import { useEffect, useState } from "react";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Filter, NotebookPen } from "lucide-react";
import { UserContextProvider } from "./context/userContext";
// import LoginForm from "./components/Loginform";
import { AuthContextProvider } from "./context/AuthContext";
import { AuthContextNewProvider } from "./context/AuthContext_v2";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [tasks, setTasks] = useState([]);
  const [isAddFormVisible, setFormVisible] = useState(false);

  const [tasks, setTasks] = useLocalStorage("taskList", []);

  const addTask = (newData) => {
    setTasks((prev) => [...prev, newData]);
  };

  // handle close
  const handleFormClose = () => {
    setFormVisible(false);
  };

  // edit task
  const editTask = (id) => {
    const item = tasks.find((task) => task.id == id);
    setFormVisible(true);
  };

  // remove task
  const removeTask = (id) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  };

  // complete task
  const completeTask = (id) => {
    const item = tasks.find((task) => task.id == id);
    const updatedItem = { ...item, isCompleted: true };
    const updatedTaskList = tasks.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    setTasks(updatedTaskList);
  };

  useEffect(() => {
    handleFormClose();
  }, [tasks]);

  return (
    <AuthContextNewProvider>
      <UserContextProvider>
        <AuthContextProvider>
          <div className="app-container">
            {/* sidebar */}
            <Sidebar />

            {/* Content */}

            <div className="content-wrapper">
              <Header />

              <div className="px-5">
                <div className="controls-wrapper">
                  <div className="filter">
                    <button>
                      <Filter /> Filter{" "}
                    </button>
                  </div>
                  <div className="add-new-task">
                    <button onClick={() => setFormVisible(true)}>
                      <NotebookPen /> Add a New Task
                    </button>
                  </div>
                </div>

                <div className="todo-wrapper">
                  {isAddFormVisible && (
                    <div className="addNewTask-wrapper">
                      <AddNewTask
                        addTaskData={addTask}
                        handleClose={handleFormClose}
                      />
                    </div>
                  )}

                  <TaskList
                    taskList={tasks}
                    editTask={editTask}
                    removeTask={removeTask}
                    completeTask={completeTask}
                  />
                </div>
              </div>
            </div>
          </div>
        </AuthContextProvider>
      </UserContextProvider>
    </AuthContextNewProvider>
  );
}

export default App;
