import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const savedTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, [theme]);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm shadow-gray-200 px-10 fixed w-full z-10">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-secondary gap-0 font-bold text-xl"
          >
            Byte<span className="text-primary">Blaze</span>
          </Link>
        </div>
        <div className="flex-none gap-4 flex items-center">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : "font-bold"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/Bookmarks"
              className={({ isActive }) =>
                isActive ? "text-primary  font-bold" : "font-bold"
              }
            >
              Bookmarks
            </NavLink>
          </ul>
          <label className="toggle text-base-content">
            <input
              type="checkbox"
              onChange={handleTheme}
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
