import { useState, useEffect } from "react";

// number of questions and time limit
const quiz_id = [
  {
    no_questions: 10,
    time: 90,
  },
];

// return the number of questions
export function no_questions() {
  // useState to show the quiz_id
  const [item, setItem] = useState({});

  // useEffect to show the content in the quiz_id
  useEffect(() => {
    quiz_id.map((item) => {
      setItem(item);
    });
  }, []);

  return item.no_questions;
}

// return the time limit
export function time_limit() {
  // useState to show the quiz_id
  const [item, setItem] = useState({});

  // useEffect to show the content in the quiz_id
  useEffect(() => {
    quiz_id.map((item) => {
      setItem(item);
    });
  }, []);
  return item.time;
}

// function to convert {item.time} to hours and minutes
export const convertTime = (time) => {
  // convert time to hours and minutes
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  // return the time in hours and minutes
  if (hours === 0) {
    return `${minutes} minutes`;
  } else if (minutes === 0) {
    return `${hours} hour(s)`;
  } else {
    return `${hours} hours ${minutes} minutes`;
  }
};

// Quiz title
export function quiz_title() {
  return "Quiz Title";
}

// Quiz picture
export function quiz_picture() {
  return "https://via.placeholder.com/100";
}
