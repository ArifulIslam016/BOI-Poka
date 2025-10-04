import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots";
import Home from "../Pages/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBook from "../Pages/ListedBook/ListedBook";
import { Suspense } from "react";
import { HiH1 } from "react-icons/hi2";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "/listedbook",
        Component: ListedBook,
      },
      {
        path: "/bookDetails/:id",
        loader: () =>  fetch("/booksData.json"),
       Component: BookDetails
      },
    ],
  },
]);
