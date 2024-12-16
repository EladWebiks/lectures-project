import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <div className="footer">footer</div>
    </>
  );
};

export default Layout;
