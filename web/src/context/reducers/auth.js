import { CHANGE_TEXT, REMOVE_TEXT } from "../types";

export default (state, action) => {
  const { auth } = state;

  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        auth: {
          ...auth,
          text: action.payload,
        },
      };
    case REMOVE_TEXT:
      return {
        ...state,
        auth: {
          ...auth,
          text: "removed",
        },
      };
    default:
      return state;
  }
};
