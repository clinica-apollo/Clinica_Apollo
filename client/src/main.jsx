import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/root.jsx";
import { DespreNoi } from "./routes/desprenoi.jsx";
import { Voluntariat } from "./routes/voluntariat";
import { Doneaza } from "./routes/doneaza";
import { Donatii } from "./routes/donatii";
import { Login } from "./routes/login";
import { Register } from "./routes/register";
import { ResetPassword } from "./routes/reset-password";
import { Account } from "./routes/account";
import { Farmacie } from "./routes/farmacie";
import { Analize } from "./routes/analize";
import { Programari } from "./routes/programari";
import { MultumimPentruDonatie } from "./routes/multumim-pentru-donatie";

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
    path: "/voluntariat",
    element: <Voluntariat />,
  },
  {
    path: "/doneaza",
    element: <Doneaza />,
  },
  {
    path: "/donatii",
    element: <Donatii />,
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
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/farmacie",
    element: <Farmacie />,
  },
  {
    path: "/programari",
    element: <Programari />,
  },
  {
    path: "/analize",
    element: <Analize />,
  },
  {
    path: "/multumim-pentru-donatie",
    element: <MultumimPentruDonatie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
