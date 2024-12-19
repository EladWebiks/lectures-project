import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LoginModal from "../../Components/LoginModal/LoginModal";
import Toastify from "../../Components/Toastify/Toastify";
const Layout = () => {
  return (
    <>
    <Toastify/>
      <Navbar/>
      <LoginModal/>
      <div style={{marginTop:"8vh"}}>
      <Outlet />
      </div>
    </>
  );
};

export default Layout;
