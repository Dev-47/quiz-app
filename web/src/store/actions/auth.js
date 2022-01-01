import { AUTH_LOGIN, AUTH_REGISTER } from "../types";
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
      console.log(err);
    });
};

export const registerUser = (user_data) => async (dispatch) => {
  await api({
    url: "/accounts/register/",
    method: "POST",
    data: user_data,
  })
    .then((response) => {
      dispatch({
        type: AUTH_REGISTER,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
