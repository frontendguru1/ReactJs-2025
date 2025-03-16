import { Link, NavLink } from "react-router";
import { TOP_MENUS } from "../config/Menus";
import FullWidthContainer from "./FullWidthContainer";
import PageContainer from "./PageContainer";

const Header = () => {
  return (
    <FullWidthContainer style="shadow-lg bg-white relative z-10">
      <PageContainer style="py-5 flex justify-between items-center">
        <div className="text-4xl text-black">
          <Link to="/">NY Store</Link>
        </div>
        <div>
          <ul className="flex gap-4">
            {TOP_MENUS.map((menu) => (
              <NavLink key={menu.title} to={menu.path}>
                {menu.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </PageContainer>
    </FullWidthContainer>
  );
};

export default Header;
