import { AUTH_LOGIN } from "../types";
import { Storage } from "../utils";

const storage = new Storage();

const initialState = {
  is_authenticated: JSON.parse(storage.get("token"))?.access ? true : false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      storage.set("token", JSON.stringify(action.payload));
      return {
        ...state,
        is_authenticated: true,
      };
    default:
      return state;
  }
};

const user = [
  {
    first_name: "dev",
    last_name: "47",
    email: "dev47@gmail.com",
    username: "dev47",
  },
];
