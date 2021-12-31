import { useParams, Link } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";
import congrats from "../../assets/images/congratulations.png";
import { no_questions } from "../../store/quiz/store";

export default function Result() {
  const { uuid } = useParams();

  // page title
  document.title = "Result - Quiz App";

  return (
    <BaseLayout>
      <div className="text-black flex flex-col place-items-center place-content-center space-y-3">
        <img
          src={congrats}
          alt="congratulatory picture"
          className="w-[40rem] sm:h-[30rem]"
        />
        <h3 className="congrats">Congratulations</h3>
        <h4 className="score">Your Score: 08 / {no_questions()}</h4>
        <button className="quiz-btn">
          <Link to="/dashboard">Go Home</Link>
        </button>
      </div>
    </BaseLayout>
  );
}
