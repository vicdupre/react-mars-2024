import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Planetes from "./pages/Planetes";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "planetes", element: <Planetes /> },
    ],
  },
]);

export default router;
