import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QuizQuestion from "../../components/quiz/QuizQuestion";

import BaseLayout from "../../layouts/BaseLayout";
import { getQuiz, submitQuiz } from "../../store/actions/quiz";

function QuizStart({ quiz, quiz_result, getQuiz, submitQuiz }) {
  const { uuid } = useParams();
  const navigate = useNavigate();

  var __quiz_data = [];

  const [quiz_candidate_data, __set_quiz_data] = useState(__quiz_data);

  const choose_answer = (answer, uuid) => {
    for (let index = 0; index < quiz_candidate_data.length; index++) {
      const quiz_data = { ...quiz_candidate_data[index], answer };
      if (quiz_data.question_uuid == uuid) {
        const updated_quiz_candidate_data = quiz_candidate_data;
        updated_quiz_candidate_data[index] = quiz_data;

        __set_quiz_data(quiz_candidate_data);
      }
    }
  };

  useEffect(() => {
    getQuiz(uuid);
  }, []);

  if (quiz) {
    for (const question of quiz.questions) {
      __quiz_data.push({
        question_uuid: question.id,
        answer: null,
      });
    }
  }

  const submit_quiz = () => {
    submitQuiz(uuid, quiz_candidate_data);

    navigate("/quiz/result/", { state: quiz_result });
  };

  return (
    <BaseLayout>
      <div className="mx-2">
        <div className="flex flex-row gap-2">
          {quiz?.questions.map((question) => (
            <QuizQuestion
              uuid={question.id}
              key={question.id}
              question={question.question}
              options={question.options}
              choose_answer={choose_answer}
              quiz_data={quiz_candidate_data}
            />
          ))}
        </div>
        <div>
          <button className="bg-blue-700 text-white p-2" onClick={submit_quiz}>
            Submit
          </button>
        </div>
      </div>
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
  quiz_result: state.quiz.quiz_result,
});

export default connect(mapStateToProps, { getQuiz, submitQuiz })(QuizStart);
