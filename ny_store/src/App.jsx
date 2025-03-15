import { RouterProvider } from "react-router";
import { Home } from "./pages";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
