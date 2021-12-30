import React from "react";
import { Link } from "react-router-dom";

export default function QuizItem(props) {
  const uuid = "asdasd";
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <Link to={`/quiz/${uuid}/start`}>Quiz</Link>
    </div>
  );
}
