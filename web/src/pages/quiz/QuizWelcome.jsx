import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";

import BaseLayout from "../../layouts/BaseLayout";
import { getQuiz } from "../../store/actions/quiz";

function QuizWelcome({ getQuiz, quiz }) {
  const { uuid } = useParams();

  useEffect(() => {
    getQuiz(uuid);
  }, []);

  // page title
  document.title = `Welcome to ${quiz?.title}`;

  return (
    <BaseLayout>
      {quiz && (
        <div className="text-black px-12 pt-12 mb-0 pb-0 text-xl">
          <h2 className="text-center text-2xl mb-8">
            Brief Explanation About this Quiz
          </h2>
          <section className="mb-9">
            <p className="mb-4">
              <span className="font-extrabold">Number of Questions:</span>{" "}
              {quiz.questions.length}
            </p>
            <p>
              <span className="font-extrabold ">Time:</span> {quiz.duration} hrs
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
          <Link to={`/quiz/${uuid}/start`}>
            <button className="quiz-btn">Click to start the quiz</button>
          </Link>
        </div>
      )}
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
});

export default connect(mapStateToProps, { getQuiz })(QuizWelcome);
