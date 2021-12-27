import { SET_LOADING } from "../types";

const setLoading = (status) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: status,
  });
};

export default {
  setLoading,
};
