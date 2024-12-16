import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>header...</div>
      <Outlet />
      <div className="footer">footer</div>
    </>
  );
};

export default Layout;
