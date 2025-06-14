import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { lazy, Suspense } from "react";
// import About from "./components/About";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Layout from "./components/Layout";

const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));
const Header = lazy(() => import("./components/Header"));
const Layout = lazy(() => import("./components/Layout"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
      </Routes>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
