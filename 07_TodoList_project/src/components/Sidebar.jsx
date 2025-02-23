import { Logs, ListChecks, NotebookPen } from "lucide-react";
const Sidebar = () => {
  return (
    <div className="sidebar">
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
