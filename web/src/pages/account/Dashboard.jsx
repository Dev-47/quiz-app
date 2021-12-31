import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";
import { getQuizList } from "../../store/actions/quiz";

function Dashboard({ getQuizList, quiz_list }) {
  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <BaseLayout>
      <main className="text-black">
        {quiz_list &&
          quiz_list.map((quiz) => (
            <Link key={quiz.id} to={`/quiz/${quiz.id}/start`} className="m-2">
              <button className="bg-blue-700 rounded-md p-2 text-white">
                {quiz.title}
              </button>
            </Link>
          ))}
      </main>
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  quiz_list: state.quiz.quiz_list,
});

export default connect(mapStateToProps, { getQuizList })(Dashboard);
