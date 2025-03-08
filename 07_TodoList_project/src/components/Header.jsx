import { useContext } from "react";
import { UserContext } from "../context/userContext";
import UserDropdown from "./UserDropdown";
import { AuthContext } from "../context/AuthContext";
import { Key } from "lucide-react";
import LoginForm from "./Loginform";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const { userName } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);
  const isAuth = JSON.parse(isAuthenticated);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  // console.log("userName", userName);

  const setFormVisibility = () => {
    setIsLoginFormVisible(false);
  };

  useEffect(() => {
    setFormVisibility();
  }, [isAuth]);

  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      {isAuth ? (
        <UserDropdown userName={"Alex"} />
      ) : (
        <div>
          <span
            className="flex gap-2 w-8 h-8 border p-1 rounded-full justify-center items-center cursor-pointer"
            onClick={() => setIsLoginFormVisible((prev) => !prev)}
          >
            <Key size={18} />
          </span>
        </div>
      )}

      {isLoginFormVisible && <LoginForm />}
    </div>
  );
};

export default Header;
