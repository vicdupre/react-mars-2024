import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Planetes from "./pages/Planetes";
import Home from "./pages/Home";
import { getPlanet, getPlanets, getUser, getUsers } from "./lib/loaders";
import Planet from "./pages/Planete";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import Store from "./pages/Store";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <Home /> },
      { path: "planetes", element: <Planetes />, loader: getPlanets },
      { path: "planetes/:id", element: <Planet />, loader: getPlanet },
      { path: "users/create", element: <CreateUser /> },
      { path: "users", element: <Users />, loader: getUsers },
      { path: "users/:id", element: <EditUser />, loader: getUser },
      { path: "store", element: <Store /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
