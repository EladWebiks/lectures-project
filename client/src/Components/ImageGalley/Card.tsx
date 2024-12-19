import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Card.css";

interface CardProps {
  imagen: string;
  onClick?: () => void; // הוספנו פעולה שתתבצע בלחיצה
}

const Card: React.FC<CardProps> = ({ imagen, onClick }) => {
  const [show, setShow] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={onClick} // לחיצה על הקלף תפעיל את הפונקציה שהתקבלה ב-props
    >
      <img src={imagen} alt="Card" />
    </animated.div>
  );
};

export default Card;
