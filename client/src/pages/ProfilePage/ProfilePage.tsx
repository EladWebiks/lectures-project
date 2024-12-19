import React from "react";
import Button from "@mui/material/Button";
import "./ProfilePage.css";
import { useTheme } from "@mui/material/styles";
import NextAppointment from "../../Components/ProfilePageComponents/NextAppointment/NextAppointment";
import ApooitnmentHistory from "../../Components/ProfilePageComponents/ApooitnmentHistory/ApooitnmentHistory";
const ProfilePage = () => {
  const theme = useTheme();
  return (
    <main className="ProfilePage page">
    <div className="pageLayout" >
        <div
          className="TopBackground"
        ></div>
        <header className="header">
          <div className="userDetails">
            <h2 id="userName">ohad rot</h2>
            <h3>ohadroth@gmail.com</h3>
            <h3>0654-1323112</h3>
          </div>
          <div>
            <Button size="large" variant="contained">
              Edit
            </Button>
          </div>
        </header>
        <div className="appointmenttDetails">
          <div className="AppointmentHistory">
            <ApooitnmentHistory/>
          </div>
          <div className="nextAppointment">
            <NextAppointment/>
          </div>
        </div>
    </div>
    </main>
  );
};

export default ProfilePage;
