import { AUTH_LOGIN } from "../types";
import { api } from "../utils";

export const loginUser = (user_creds) => async (dispatch) => {
  await api({
    url: "/accounts/login/",
    method: "POST",
    data: user_creds,
  })
    .then((response) => {
      dispatch({
        type: AUTH_LOGIN,
        payload: response.data,
      });
    })
    .catch((err) => {
      // dispatch({
      //   action: SET_ERROR,
      //   payload: err.response.data
      // })
      console.log(err);
    });
};
