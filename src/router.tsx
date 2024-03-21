import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Planetes from "./pages/Planetes";
import Home from "./pages/Home";
import { getPlanet, getPlanets } from "./lib/loaders";
import Planet from "./pages/Planete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "planetes", element: <Planetes />, loader: getPlanets },
      { path: "planetes/:id", element: <Planet />, loader: getPlanet },
    ],
  },
]);

export default router;
