import React, { useState, useEffect } from "react";

export default function QuizQuestion({
  uuid,
  question,
  options,
  choose_answer,
  quiz_data,
}) {
  const [active, set_active] = useState(null);

  const derive_active = () => {
    let __active = null;

    for (const data of quiz_data) {
      if (data.question_uuid == uuid) {
        __active = data.answer;
      }
    }

    set_active(__active);
  };

  return (
    <div className="border-2 border-gray-100 border-solid">
      <div className="quiz-question">
        <p className="text-2xl text-black p-2">{question}</p>
      </div>

      {options?.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            choose_answer(option, uuid);
            derive_active();
          }}
          className={`text-white p-2 m-2 ${
            active == option ? "bg-red-700" : "bg-blue-700"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
