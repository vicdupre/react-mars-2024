import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Planetes from "./pages/Planetes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
  },
  { path: "/planetes", element: <Planetes /> },
]);

export default router;
