import { useParams, Link, useLocation } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";
import congrats_img from "../../assets/images/congratulations.png";

export default function QuizResult() {
  const { score, summary } = useLocation()?.state;

  // page title
  document.title = "Result - Quiz App";

  return (
    <BaseLayout>
      <div className="text-black flex flex-col place-items-center place-content-center space-y-3">
        <img
          src={congrats_img}
          alt="congratulatory picture"
          className="w-[40rem] sm:h-[30rem]"
        />
        <h3 className="congrats">Congratulations</h3>
        <h4 className="score">
          Your Score({score}): {summary}
        </h4>
        <button className="quiz-btn">
          <Link to="/dashboard">Go Home</Link>
        </button>
      </div>
    </BaseLayout>
  );
}
