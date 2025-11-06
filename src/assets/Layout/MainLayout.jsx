import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Header/navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
