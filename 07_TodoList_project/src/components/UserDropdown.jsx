import { CircleUserRound } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
const UserDropdown = ({ userName }) => {
  const { handleLogout } = useContext(AuthContext);
  const [isLogoutDropdownVisible, setLogoutDropdownVisible] = useState(false);
  return (
    <div>
      <div
        className="user-dropdown"
        onClick={() => setLogoutDropdownVisible((prev) => !prev)}
      >
        {userName}
        <CircleUserRound size={32} />
      </div>

      {isLogoutDropdownVisible && (
        <div className="logout-dropdown">
          <div onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
