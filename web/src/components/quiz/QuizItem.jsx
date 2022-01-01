import React from "react";
import { Link } from "react-router-dom";
import quiz_image from "../../assets/images/quiz-img.jpg";

export default function QuizItem({ quiz }) {
  const uuid = quiz.id;

  return (
    <section className="w-80 sm:w-[30rem] flex justify-between m-4 p-0 h-15 shadow-md">
      <img src={quiz_image} alt="Quiz Image" className="m-0 p-0" />
      <div className="flex flex-col justify-between">
        <h4 className="p-3 font-extrabold text-lg">{quiz.title}</h4>
        <span className="pl-3">
          <Link to={`/quiz/${uuid}/welcome`}>view details</Link>
        </span>
      </div>
    </section>
  );
}
