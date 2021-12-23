import { REMOVE_TEXT, CHANGE_TEXT } from "../types";

const removeText = (text) => (dispatch) => {
  dispatch({
    action: REMOVE_TEXT,
    payload: text,
  });
};

const changeText = (text) => (dispatch) => {
  dispatch({
    type: CHANGE_TEXT,
    payload: text,
  });
};

export default {
  removeText,
  changeText,
};
