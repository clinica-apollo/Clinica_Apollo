import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/root.jsx";
import { Servicii } from "./routes/servicii";
import { DespreNoi } from "./routes/desprenoi.jsx";
import { Voluntariat } from "./routes/voluntariat";
import { Doneaza } from "./routes/doneaza";
import { Login } from "./routes/login";
import { Register } from "./routes/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/despre-noi",
    element: <DespreNoi />,
  },
  {
    path: "/servicii",
    element: <Servicii />,
  },
  {
    path: "/voluntariat",
    element: <Voluntariat />,
  },
  {
    path: "/doneaza",
    element: <Doneaza />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
