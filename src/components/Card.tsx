import React from "react";
import { MdArrowOutward } from "react-icons/md";

import { AiOutlinePlus } from "react-icons/ai";
import { CardData } from "../constant/CardData";
// interface CardProps {
//   icon: JSX.Element;
//   title: string;
//   children: React.ReactNode;
// }

const Card: React.FC<CardData> = ({ icon, title, description, goals }) => {
  return (
    <div className="card">
      <span className="card__icon">{icon}</span>
      <h1 className="card__title">{title}</h1>
      <h5 className="card__description">{description}</h5>
      <div className="card__goals">
        {goals.map((goal, index) => (
          <span key={index} className="card__goals--text">
            <AiOutlinePlus /> <span>{goal.text}</span>
          </span>
        ))}
        <div className="card__more">
          <MdArrowOutward />
          <span>Voir plus</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
