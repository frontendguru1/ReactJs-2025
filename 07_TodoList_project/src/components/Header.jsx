import { CircleUserRound } from "lucide-react";

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-dropdown">
        <CircleUserRound size={32} />
      </div>
    </div>
  );
};

export default Header;
