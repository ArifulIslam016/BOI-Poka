import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots";
import Home from "../Pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        path: "/",
        loader: () => fetch('booksData.json'),
        Component: Home,
      },
    ],
  },
]);
