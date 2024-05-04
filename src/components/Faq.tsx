import React from "react";
import { MdArrowOutward } from "react-icons/md";

export interface FaqData {
  question: string;
  answer: string;
  onClick: () => void;
  open: boolean;
}
const Faq: React.FC<FaqData> = ({ question, answer, onClick,open }) => {
  return (
    <div className="accordeon" onClick={onClick}>
      <div className="accordeon__title">
        <h1>{question}</h1>
        <span>{<MdArrowOutward />}</span>
      </div>
      <p className={`accordeon__text ${open ? "open" : ""}`}>{answer}</p>
    </div>
  );
};

export default Faq;
