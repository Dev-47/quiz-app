import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";

export default function StartQuiz() {
  const { uuid } = useParams();

  // number of questions and time limit
  const quiz_id = [
    {
      no_questions: 10,
      time: 90,
    },
  ];

  // useState to show the quiz_id
  const [item, setItem] = useState({});

  // useEffect to show the content in the quiz_id
  useEffect(() => {
    quiz_id.map((item) => {
      setItem(item);
    });
  }, []);

  // function to convert {item.time} to hours and minutes
  const convertTime = (time) => {
    // convert time to hours and minutes
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    // return the time in hours and minutes
    if (hours === 0) {
      return `${minutes} minutes`;
    } else if (minutes === 0) {
      return `${hours} hour(s)`;
    } else {
      return `${hours} hours ${minutes} minutes`;
    }
    e;
  };

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
            {item.no_questions}
          </p>
          <p>
            <span className="font-extrabold ">Time:</span>{" "}
            {convertTime(item.time)}
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
