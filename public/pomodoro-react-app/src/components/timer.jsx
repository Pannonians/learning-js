import { useEffect, useState } from "react";
import Settings from "./settings/settings";

function Timer() {
  const storageTime = localStorage.getItem("timeLeft");
  const [time, setTime] = useState(
    storageTime ? parseInt(storageTime) : 25 * 60
  );
  // time in seconds
  const [isActive, setIsActive] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("Start timer");

  const getTime = () => {
    const timeFromLocalStorage = localStorage.getItem("timeLeft");
    const minutes = Math.floor(timeFromLocalStorage / 60);
    const seconds = timeFromLocalStorage - minutes * 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const startTimer = () => {
    setIsActive(!isActive);
    setDisplayMessage(!isActive ? "Ticking" : "Pause");
  };

  const resetTimer = () => {
    localStorage.setItem("timeLeft", 1500);
    setTime(localStorage.getItem("timeLeft"));
    setIsActive(false);
    setDisplayMessage(isActive ? "Ticking" : "Start timer");
  };

  useEffect(() => {
    if (time > 0 && isActive) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  useEffect(() => localStorage.setItem("timeLeft", time), [time]);

  window.onload = function () {
    let timeInterval = 1500;
    let timeLeft = localStorage.getItem("timeLeft");
    if (isNaN(timeLeft)) {
      localStorage.setItem("timeLeft", timeInterval);
    } else if (timeLeft === 0) {
      localStorage.setItem("timeLeft", timeInterval);
    } else {
      setIsActive(true);
      timeInterval = parseInt(timeLeft);
      setTime(timeInterval);
      localStorage.setItem("timeLeft", time);
    }
  };

  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-12 left">
          <Settings />
        </div>
      </div>
      <div className="timer timer:hover center">{getTime()}</div>
      <div>
        <div className="row">
          <div className="col-sm-12 center message">
            <p>{displayMessage}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 center">
            <button
              className="btn button-startstop"
              onClick={() => startTimer()}
            >
              {isActive ? "Stop" : "Start"}
            </button>
            <button
              className="btn button-startstop"
              onClick={() => resetTimer()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
