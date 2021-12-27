import { SET_LOADING } from "../types";

const initialState = {
  is_loading: false,
};

export default (state = initialState, action) => {
  const { common } = state;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        is_loading: action.payload,
      };
    default:
      return state;
  }
};
