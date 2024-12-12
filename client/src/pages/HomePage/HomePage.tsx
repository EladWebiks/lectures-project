import { FC } from "react";
import "./HomePage.css";
import { Outlet } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <main className="HomePage">
      <nav>Ohad Gever</nav>
   
        <Outlet /> {/* This will render the child routes */}
    
    </main>
  );
};

export default HomePage;
