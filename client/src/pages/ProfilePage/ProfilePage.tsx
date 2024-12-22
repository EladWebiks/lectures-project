import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import "./ProfilePage.css";
import { useTheme } from "@mui/material/styles";
import NextAppointment from "../../Components/ProfilePageComponents/NextAppointment/NextAppointment";
import ApooitnmentHistory from "../../Components/ProfilePageComponents/ApooitnmentHistory/ApooitnmentHistory";
import { useContext } from "react";
import { useMyContext } from "../../Context";
import closestAppointment from "../../utilities/closestAppointment";

const ProfilePage = () => {
  //@ts-ignore
  const {user} = useMyContext()

  const theme = useTheme();

  const getTheDate =()=>{
    const dateTime = new Date();
    let justDate = dateTime.toUTCString()
    return justDate.slice(0,justDate.indexOf(':')-3);
  }
  return (
    <main className="ProfilePage page">
    <div className="pageLayout" >
        <div
          className="TopBackground"></div>
        <header className="header">
          <div className="userDetails">
            <span>{getTheDate()}</span>
            <h2 id="userName">{user?.username}</h2>
            <h3>{user?.email}</h3>
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
            <NextAppointment user={user} />
          </div>
        </div>
    </div>
    </main>
  );
};

export default ProfilePage;
