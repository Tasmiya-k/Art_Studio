import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart"
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  const router = createBrowserRouter([
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/cart",
      element: <Cart/>
    },
  ]);
  return (
    <div className="App">
      <ToastContainer/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
