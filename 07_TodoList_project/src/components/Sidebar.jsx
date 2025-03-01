import { Logs, ListChecks, NotebookPen } from "lucide-react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
const Sidebar = () => {
  const { userName } = useContext(UserContext);
  return (
    <div className="sidebar">
      Username is: {userName}
      <div className="logo">Todo List - Manager</div>
      <div className="menus">
        <ul>
          <li>
            <Logs /> Dashboard
          </li>
          <li>
            <ListChecks />
            My Task
          </li>
          <li>
            <NotebookPen /> Add a New Task
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
