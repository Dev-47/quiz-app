import React, { useEffect } from "react";
import QuizItem from "../../components/quiz/QuizItem";
import BaseLayout from "../../layouts/BaseLayout";

import { connect } from "react-redux";
import { getQuizList } from "../../store/actions/quiz";

function QuizList({ getQuizList, quiz_list }) {
  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <BaseLayout>
      <main className="text-black p-10">
        <h2 className="quiz-btn text-xl uppercase">What's New</h2>
        <section className="flex flex-col place-content-center place-items-center">
<<<<<<< HEAD
          <span className="">
            <QuizItem />
          </span>
          <span className="">
            <QuizItem />
          </span>
          <span className="">
            <QuizItem />
          </span>
=======
          {quiz_list &&
            quiz_list.map((item) => (
              <span className="" key={item.id}>
                <QuizItem quiz={item} />
              </span>
            ))}
>>>>>>> 0e4dc69609a2ead570e4d13912a022db827c2dc0
        </section>
      </main>
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  quiz_list: state.quiz.quiz_list,
});

export default connect(mapStateToProps, { getQuizList })(QuizList);
