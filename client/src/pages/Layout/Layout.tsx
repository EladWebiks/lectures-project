import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LoginModal from "../../Components/LoginModal/LoginModal";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <LoginModal/>
      <div style={{marginTop:"8vh"}}>
      <Outlet />
      </div>
    </>
  );
};

export default Layout;
