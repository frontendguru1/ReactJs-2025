import { useContext } from "react";
import { UserContext } from "../context/userContext";
import UserDropdown from "./UserDropdown";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { userName } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);
  const isAuth = JSON.parse(isAuthenticated);
  // console.log("userName", userName);

  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      {isAuth ? (
        <UserDropdown userName={"Alex"} />
      ) : (
        <div>
          <span>Login </span>
        </div>
      )}
    </div>
  );
};

export default Header;
