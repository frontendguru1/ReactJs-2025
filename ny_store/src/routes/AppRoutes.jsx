import { createBrowserRouter } from "react-router";
import {
  Home,
  ProductDetails,
  ProductList,
  SignUp,
  Login,
  Layout,
  About,
  Contact,
  ShoppingCart,
  ProductListByCategory,
} from "../pages";
import { MENU_PATH } from "../config/Menus";
import { ProtectedRoute } from "../components";
export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: MENU_PATH.HOME,
        element: <Home />,
        index: true,
      },
      {
        path: MENU_PATH.ABOUT,
        element: <About />,
      },
      {
        path: MENU_PATH.CONTACT,
        element: <Contact />,
      },
      {
        path: MENU_PATH.LOGIN,
        element: <Login />,
      },
      {
        path: MENU_PATH.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: MENU_PATH.PRODUCT_LIST,
        element: <ProductList />,
      },
      {
        path: MENU_PATH.PRODUCT_LIST_BY_CATEGORY,
        element: <ProductListByCategory />,
      },
      {
        path: MENU_PATH.PRODUCT_DETAILS,
        element: <ProductDetails />,
      },
      {
        path: MENU_PATH.SHOPPING_CART,
        element: (
          <ProtectedRoute>
            <ShoppingCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
