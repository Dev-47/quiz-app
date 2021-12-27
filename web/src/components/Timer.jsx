import React, { useState, useEffect } from "react";
import Styles from "../components/Utils/CountdownTimer.css";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  //   const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    // setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  }``

  let minutes = 0;

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  let result = "it is counting";

  if (seconds === 10) {
    setSeconds(0);
  }
  if (seconds === 10) {
    result = "o ti de 60 oo";
    minutes++;
  }

  return (
    <div className="app">
      <article>
        <p>{result}</p>
      </article>
      <div className="minutes">{minutes} min</div>
      <div className="time">{seconds}s</div>

      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
