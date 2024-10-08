import './assets/index.css'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Rental from "./pages/Rental.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/", 
                element: <Home />,
            },
            {
                path: "/rental/:id",
                element: <Rental />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
