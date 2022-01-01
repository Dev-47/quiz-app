import { useEffect } from "react";

export default function AddQuestion({
  uuid,
  questions,
  add_question,
  set_state,
}) {
  const get_data = () => {
    return questions.filter((question) => {
      if (question.uuid == uuid) {
        return question;
      }
    })[0];
  };

  const update_question = (data_update) => {
    for (let index = 0; index < questions.length; index++) {
      const question = questions[index];
      if (question.uuid == uuid) {
        questions[index] = { ...data_update };
        console.log(questions[index]);
        set_state(questions);
      }
    }
  };

  const set_question = (e) => {
    update_question({ question: e.target.value });
  };

  let { question, options, answer } = get_data();

  return (
    <>
      <div>
        {question}
        <textarea
          placeholder="Enter your Question here"
          className="form-control-enter"
          onChange={set_question}
        >
          {question}
        </textarea>

        <div className="grid grid-cols-3 gap-1">
          {options?.map((option, index) => (
            <input
              className="form-control"
              type="text"
              value={option}
              key={index}
              placeholder="add your option here"
              onChange={() => {}}
            />
          ))}
          <input
            type="text"
            className="form-control"
            placeholder="add your answer here"
          />
          {add_question && (
            <button onClick={add_question} className="blue-plus-btn">
              <i className="fas fa-plus"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
