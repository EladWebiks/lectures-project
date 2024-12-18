import { FC } from "react";
import "./HomePage.css";
import { useMyContext } from "../../Context";



const HomePage: FC = () => {
    const { user } = useMyContext();
  return (
    <main className="HomePage page">
<<<<<<< HEAD
      <h1>{user?.username}</h1>
=======
      home
>>>>>>> 5bc5325667bf6a66bf6ace9b4d030f2edc3e69e4
    </main>
  );
};

export default HomePage;
