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
  const [tasks, setTasks] = useState([]);
  const [isAddFormVisible, setFormVisible] = useState(false);

  const [data, setData] = useLocalStorage("user", { name: "Michael" });

  const updateUser = () => {
    const newDetails = {
      name: "Alex",
      age: 32,
      address: "abc address",
    };

    setData(newDetails);
    console.log("data", data);
  };

  // const newTask = [];
  // newTask.push(2)

  const addTask = (newData) => {
    setTasks((prev) => [...prev, newData]);
  };

  const handleFormClose = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    console.log("tasks", tasks);
    handleFormClose();

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
                  <div>User Details: {data.name}</div>

                  <button
                    onClick={updateUser}
                    className="px-4 py-2 bg-sky-800 text-white font-semibold rounded-sm hover:bg-sky-700 cursor-pointer"
                  >
                    Update User
                  </button>

                  {isAddFormVisible && (
                    <div className="addNewTask-wrapper">
                      <AddNewTask
                        addTaskData={addTask}
                        handleClose={handleFormClose}
                      />
                    </div>
                  )}

                  <TaskList taskList={tasks} />
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
