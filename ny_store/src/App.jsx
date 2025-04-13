import { RouterProvider } from "react-router";
import { Home } from "./pages";
import { AppRoutes } from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRoutes} />
    </Provider>
  );
}

export default App;
