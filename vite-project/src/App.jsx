import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./about";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./Navbar.css";
import ParaComp from "./ParaComp";
import Notfound from "./Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <Navbar />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
        <Navbar />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
        <Navbar />
      </div>
    ),
  },
   {
    path: "*",
    element: (
      <Notfound/>
    ),
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <ParaComp />
        <Navbar />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
