import React from "react";

import "./assets/scss/style.scss";

import Router from "./router";
import { Provider } from "./context";

export default function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
