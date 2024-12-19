import { FC } from "react";
import "./HomePage.css";
import { useMyContext } from "../../Context";
import closestAppointment from "../../utilities/closestAppointment";



const HomePage: FC = () => {
  const { user } = useMyContext();
  const closeAppointment = closestAppointment(user)
  return (
    <main className="HomePage page">
      {user ? <h1>{user.username}</h1> : <h1>Loading...</h1>}
      <h3>{closeAppointment ? closeAppointment?.description : ""}</h3>
      <h3>{closeAppointment ?closeAppointment?.start.toString().split(' ').slice(0,5).join(" ") : ""}</h3>

    </main>
  );
};

export default HomePage;
