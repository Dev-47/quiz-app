import React, { createContext, useReducer } from "react";

import reducers from "./reducers";
import states from "./states";
import actions from "./actions";

// initial state
const initialState = states;

// context

export const Context = createContext(initialState);

// provider

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Context.Provider value={{ state, actions, dispatch }}>
      {children}
    </Context.Provider>
  );
};
