import '../assets/index.css'
/*import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./App.jsx";


createRoot(document.getElementById('root')).render(    
    <StrictMode>
        <App />
    </StrictMode>,
)*/

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Rental from "./Pages/Rental.jsx";
import About from "./Pages/About.jsx";
import NotFound from "./Pages/NotFound.jsx";
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
            {
                path: "/rental/*",
                element: <NotFound />,
            },
            
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
