import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./pages/About Us/AboutUs";
import NewClient from "./pages/Dashboard/Client/NewClient";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoadingPage from "./pages/Loading Page/LoadingPage";
import Signup from "./pages/Sign up/Signup";

const AllRoutes = [
  {
    name: "Loading",
    path: "/",
    element: <LoadingPage />,
  },
  {
    name: "Sign up",
    path: "/sign-up",
    element: <Signup />,
  },
  {
    name: "About us",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    name: "Register Client",
    path: "/client/new",
    element: <NewClient />,
  },
];

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {AllRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
