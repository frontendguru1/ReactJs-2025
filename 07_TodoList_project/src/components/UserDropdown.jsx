import { CircleUserRound } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const UserDropdown = ({ userName }) => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <div>
      <div className="user-dropdown">
        {userName}
        <CircleUserRound size={32} />
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDropdown;
