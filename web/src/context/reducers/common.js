import { SET_LOADING } from "../types";

export default (state, action) => {
  const { common } = state;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        common: {
          ...common,
          is_loading: action.payload,
        },
      };
    default:
      return state;
  }
};
