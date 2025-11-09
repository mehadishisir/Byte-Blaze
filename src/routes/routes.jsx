import MainLayout from "../assets/Layout/MainLayout.jsx";
import Home from "../assets/pages/Home/Home.jsx";
import Blogs from "../assets/pages/Home/Blogs/Blogs.jsx";
import BlogData from "../assets/pages/Home/Blogs/BlogData.jsx";
import Bookmark from "../assets/pages/Home/Bookmarks/Bookmark.jsx";
import { createBrowserRouter } from "react-router";
import "../index.css";
import Content from "../assets/components/content/content.jsx";
import author from "../assets/components/author/author.jsx";

export const router = createBrowserRouter([
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
        loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`),
      },
      {
        path: "/blogs/:id",
        element: <BlogData></BlogData>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            Component: Content,
          },
          {
            path: "author",
            Component: author,
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmark></Bookmark>,
      },
    ],
  },
]);
