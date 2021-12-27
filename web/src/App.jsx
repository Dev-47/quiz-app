import React from "react";
import "./assets/scss/style.scss";
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
    </Provider>
)
}
