import { Logs, ListChecks, NotebookPen } from "lucide-react";
import Logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContextNew } from "../context/AuthContext_v2";

const Sidebar = () => {
  // const { user, data } = useContext(AuthContextNew);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Taskly" />
      </div>

      {/* <div className="text-white">
        Username is:{user.name} and age: {user.age}
        {data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div> */}
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
