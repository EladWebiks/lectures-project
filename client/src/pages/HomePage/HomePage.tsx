import { FC } from "react";
import "./HomePage.css";
import { useMyContext } from "../../Context";



const HomePage: FC = () => {
    const { user } = useMyContext();
  return (
    <main className="HomePage page">
      <h1>{user?.username}</h1>
    </main>
  );
};

export default HomePage;
