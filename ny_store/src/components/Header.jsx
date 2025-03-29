import { Link, NavLink } from "react-router";
import { MENU_PATH, TOP_MENUS } from "../config/Menus";
import FullWidthContainer from "./FullWidthContainer";
import PageContainer from "./PageContainer";
import { ICONS } from "../config/Icons";
import { CircleUserRound, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <FullWidthContainer style="shadow-lg bg-white relative z-10">
      <PageContainer style="py-5 flex justify-between items-center">
        <div className="text-4xl text-black">
          <Link to="/">NY Store</Link>
        </div>
        <div className="flex gap-7">
          <div>
            <ul className="flex gap-7">
              {TOP_MENUS.map((menu) => (
                <NavLink key={menu.title} to={menu.path}>
                  {menu.title} {ICONS.HOME}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="">
            <ul className="flex gap-4">
              <li>
                <NavLink to={MENU_PATH.SHOPPING_CART}>
                  <ShoppingCart />
                </NavLink>
              </li>
              <li>
                <NavLink to={MENU_PATH.LOGIN}>
                  <CircleUserRound />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </FullWidthContainer>
  );
};

export default Header;
