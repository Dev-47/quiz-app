import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddQuestion from "../../components/quiz/AddQuestion";
import BaseLayout from "../../layouts/BaseLayout";

export default function CreateQuiz() {
  const [quiz_title, set_quiz_title] = useState("");
  const [questions, __set_question] = useState([
    {
      uuid: uuidv4(),
      question: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ]);

  const add_question = () => {
    __set_question([
      ...questions,
      {
        uuid: uuidv4(),
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ]);
  };

  const save_quiz = (e) => {
    e.preventDefault();

    const quiz_data = {
      title: quiz_title,
      questions,
    };
  };

  return (
    <BaseLayout>
      <main className="text-black bg-[#fffaf2] flex flex-col place-items-center place-content-center">
        <h2 className="justify-start flex w-full text-[#026294] font-extrabold p-12 text-xl uppercase">
          create a quiz
        </h2>

        <div className="fixed left-12 top-[27%]">
          <p className="inline px-2 text-lg shadow-inner p-5">
            <span className="font-bold">No of Questions : </span>
            {questions.length}
          </p>
        </div>

        <form
          onSubmit={save_quiz}
          className="max-w-lg flex flex-col place-items-center place-content-center p-4 bg-white shadow-md mb-6 space-y-1"
        >
          <input
            onChange={(e) => {
              set_quiz_title(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Title"
            value={quiz_title}
          />

          {questions &&
            questions.map((question, index) => (
              <AddQuestion
                key={index}
                add_question={
                  index == questions.length - 1 ? add_question : null
                }
                questions={questions}
                set_state={__set_question}
                {...question}
              />
            ))}

          <button className="blue-quiz-btn">Create Quiz</button>
        </form>
      </main>
    </BaseLayout>
  );
}
