import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Home from "./assets/pages/Home/Home.jsx";
import Blogs from "./assets/pages/Home/Blogs/Blogs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Bookmark from "./assets/pages/Home/Bookmarks/Bookmark.jsx";
import MainLayout from "./assets/Layout/MainLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/bookmarks",
        element: <Bookmark></Bookmark>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
