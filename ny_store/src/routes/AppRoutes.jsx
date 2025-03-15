import { createBrowserRouter } from "react-router";
import {
  Home,
  ProductDetails,
  ProductList,
  SignUp,
  Login,
  Layout,
} from "../pages";
export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
    ],
  },
]);
