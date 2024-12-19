import React from "react";
import Button from "@mui/material/Button";
import "./ProfilePage.css";
import { useTheme } from "@mui/material/styles";
import NextAppointment from "../../Components/ProfilePageComponents/NextAppointment/NextAppointment";
const ProfilePage = () => {
  const theme = useTheme();
  return (
    <main className="ProfilePage page">
    <div className="pageLayout" >
        <div
          className="TopBackground"
        ></div>
        <header className="header">
          <div>
            <h2>ohad rot</h2>
            <h4>ohadroth@gmail.com</h4>
            <h4>0654-1323112</h4>
          </div>
          <div>
            <Button size="large" variant="contained">
              Edit
            </Button>
          </div>
        </header>
        <div className="appointmenttDetails">
          <div className="AppointmentHistory">history</div>
          <div className="nextAppointment">
            <NextAppointment/>
          </div>
        </div>
    </div>
    </main>
  );
};

export default ProfilePage;
