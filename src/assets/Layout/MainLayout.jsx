import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Header/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
