import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";
import { no_questions, time_limit, convertTime} from "../../store/quiz/store";

export default function StartQuiz() {
  const { uuid } = useParams();

  // page title
  document.title = "Start Quiz - Quiz App";
  return (
    <BaseLayout>
      <div className="text-black px-12 pt-12 mb-0 pb-0 text-xl">
        <h2 className="text-center text-2xl mb-8">
          Brief Explanation About this Quiz
        </h2>
        <section className="mb-9">
          <p className="mb-4">
            <span className="font-extrabold">Number of Questions:</span>{" "}
            {no_questions()}
          </p>
          <p>
            <span className="font-extrabold ">Time:</span>{" "}
            {convertTime(time_limit())}
          </p>
        </section>
        <main>
          <h4 className="mb-9">
            Please read the text carefully so you can understand it
          </h4>
          <ol className="space-y-3 list-decimal list-inside">
            <li>
              10 point awarded for a correct answer and no marks for an
              incorrect answer
            </li>
            <li>Tap on options to select your answer</li>
            <li>Tap on bookmark icon to save interesting questions</li>
          </ol>
        </main>
        <button className="quiz-btn">Click to start the quiz</button>
      </div>
    </BaseLayout>
  );
}
