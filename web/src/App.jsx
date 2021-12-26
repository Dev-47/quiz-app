import React from "react";

import "./assets/scss/style.scss";

import Router from "./router";
import store from "./store";

import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
