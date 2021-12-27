import React from "react";
import "./assets/scss/style.scss";
<<<<<<< HEAD
import './assets/scss/loader.css'
import { Provider } from "./context";
import { Lines } from 'react-preloaders';

export default function App() {
  return (
    <Provider>      
      <div className="text">
        DEV-47 Quiz 
      </div>
<div className="parent-loader">
<Lines animation="slide" time={2800}  background="#2ded9d"  />;
</div>
=======

import Router from "./router";
import store from "./store";

import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
>>>>>>> a90a8cda770f74ef7e3de59b8059c4d85ecc5a9e
    </Provider>
)
}
