import { Navigate } from "react-router";
import { MENU_PATH } from "../config/Menus";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
const ProtectedRoute = ({ children }) => {
  // const navigate = useNavigate();
  // const [isAuthenticated] = useLocalStorage("isAuthenticated");
  const isAuthenticated = window.localStorage.getItem("isAuthenticated");
  // is user authenticated ?

  // fetch localstorage - isAuthenticated

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={MENU_PATH.LOGIN} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
