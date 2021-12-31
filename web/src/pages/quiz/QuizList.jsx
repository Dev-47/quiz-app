import React from "react";
import QuizItem from "../../components/quiz/QuizItem";
import BaseLayout from "../../layouts/BaseLayout";

export default function QuizList() {
  return (
    <BaseLayout>
      <main className="text-black p-10">
        <h2 className="quiz-btn text-xl uppercase">What's New</h2>
        <section className="flex flex-col place-content-center place-items-center">
          <span className="">
            <QuizItem />
          </span>
          <span className="">
            <QuizItem />
          </span>
          <span className="">
            <QuizItem />
          </span>
        </section>
      </main>
    </BaseLayout>
  );
}
