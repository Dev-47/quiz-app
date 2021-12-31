import { GET_QUIZ, GET_QUIZ_LIST } from "../types";
import { api } from "../utils";

export const getQuizList = () => async (dispatch) => {
  await api({
    url: "/quiz/list/",
    method: "GET",
  })
    .then((response) => {
      dispatch({
        type: GET_QUIZ_LIST,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getQuiz = (uuid) => async (dispatch) => {
  await api({
    url: `quiz/${uuid}/details/`,
    method: "GET",
  })
    .then((response) => {
      dispatch({
        type: GET_QUIZ,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
