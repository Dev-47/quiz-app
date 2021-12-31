import { GET_QUIZ, GET_QUIZ_LIST } from "../types";

const initialState = {
  quiz_list: [],
  quiz: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ_LIST:
      return {
        ...state,
        quiz_list: action.payload,
      };
    case GET_QUIZ:
      return {
        ...state,
        quiz: action.payload,
      };
    default:
      return state;
  }
};
