import { CircleUserRound } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { userName } = useContext(UserContext);
  // console.log("userName", userName);

  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-dropdown">
        {userName}
        <CircleUserRound size={32} />
      </div>
    </div>
  );
};

export default Header;
