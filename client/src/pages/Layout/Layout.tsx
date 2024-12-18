import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div style={{marginTop:"8vh"}}>
      <Outlet />
      </div>
    </>
  );
};

export default Layout;
