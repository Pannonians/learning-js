import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Settings from "./settings/settings";

function Timer() {
  const pomodoro = useSelector((state) => state.settings.duration);
  const shortBreak = useSelector((state) => state.settings.shortBreak);
  const longBreak = useSelector((state) => state.settings.longBreak);
  const longBreakDelay = useSelector((state) => state.settings.longBreakDelay);
  const autoPomodoros = useSelector((state) => state.settings.autoPomodoros)
  const autoBreaks = useSelector((state) => state.settings.autoBreaks)
  const [countPomodoros, setCountPomodoros] = useState(1);
  const [isLongBrake, setIsLongBrake] = useState(false);

  const [isWork, setIsWork] = useState(true);
  const dataFromStorage = localStorage.getItem("timeLeft");
  const [time, setTime] = useState(
    dataFromStorage ? dataFromStorage : pomodoro
  );
  const [isActive, setIsActive] = useState(false);

  const savedSchemes = JSON.parse(localStorage.getItem("allSchemes"));
  const activeScheme = savedSchemes ? savedSchemes.find((item) => item.isActive) : ''

  const getTime = () => {
    const timeFromLocalStorage = localStorage.getItem("timeLeft");
    if (timeFromLocalStorage > 0) {
      const minutes = Math.floor(timeFromLocalStorage / 60);
      const seconds = timeFromLocalStorage - minutes * 60;
      return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
        }`;
    } else
      if (isWork) {
        localStorage.setItem("timeLeft", activeScheme ? (activeScheme.pomodoroDuration * 60) : pomodoro)
        const minutes = activeScheme ? (activeScheme.pomodoroDuration * 60) : pomodoro / 60;
        const seconds = activeScheme ? (activeScheme.pomodoroDuration * 60 - minutes) : (pomodoro - minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
          }`;
      } else {
        if (isLongBrake) {
          localStorage.setItem("timeLeft", activeScheme ? (activeScheme.longBreakDuration * 60) : longBreak)
          const minutes = activeScheme ? (activeScheme.longBreakDuration * 60) : longBreak / 60;
          const seconds = activeScheme ? (activeScheme.longBreakDuration * 60 - minutes) : (longBreak - minutes) * 60;
          return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
            }`;
        } else {
          localStorage.setItem("timeLeft", activeScheme ? (activeScheme.shortBreakDuration * 60) : shortBreak)
          const minutes = activeScheme ? (activeScheme.shortBreakDuration * 60) : shortBreak / 60;
          const seconds = activeScheme ? (activeScheme.shortBreakDuration * 60 - minutes) : (shortBreak - minutes) * 60;
          return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
            }`;
        }
      }
  };

  const startTimer = () => {
    setTime(localStorage.getItem("timeLeft"));
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    const resetTime = isWork ? (activeScheme ? activeScheme.pomodoroDuration * 60 : pomodoro) : (isLongBrake ? activeScheme ? activeScheme.longBreakDuration * 60 : longBreak : activeScheme ? activeScheme.shortBreakDuration * 60 : shortBreak);
    localStorage.setItem("timeLeft", resetTime);
    setTime(resetTime);
    setIsActive(false);
  };

  useEffect(() => {
    if (!isActive) return;
    if (isWork && time === 0) {
      setIsWork((prevState) => !prevState);
      setIsActive(false);
      setCountPomodoros(countPomodoros + 1);
      const longBrakeNumber = activeScheme ? (+activeScheme.longBreakDelay) : (longBreakDelay)
      setIsLongBrake(countPomodoros === longBrakeNumber);
    } else {
      if (isLongBrake && time === 0) {
        setIsWork((prevState) => !prevState);
        setIsActive(false); 
        setIsLongBrake(false);
        setCountPomodoros(1);
      } else {
        if (time === 0) {
          setIsWork((prevState) => !prevState);
          setIsActive(false);
        }
      }
    }
    const timeOut = setTimeout(() => {
      setTime((prevState) => prevState - 1);
    }, 10);
    return () => {
      clearTimeout(timeOut);
    }
  }, [time, isActive, countPomodoros, isWork, isLongBrake, longBreakDelay]);

  useEffect(() => localStorage.setItem("timeLeft", time), [time]);

  return (
    <div className="col-sm-12">
      {" "}
      <div className="row">
        {" "}
        <div className="col-sm-12 left">
          {" "}
          <Settings />{" "}
        </div>{" "}
      </div>{" "}
      <div className="timer timer:hover center">{getTime()}</div>{" "}
      <div>
        {" "}
        <div className="row">
          {" "}
          <div className="col-sm-12 center message">
            {" "}
            <p>{isWork ? "work time" : "pause time"}</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="row">
          {" "}
          <div className="col-sm-12 center">
            {" "}
            <button
              className="btn button-startstop"
              onClick={() => startTimer()}
            >
              {" "}
              {isActive ? "Stop" : "Start"}{" "}
            </button>{" "}
            <button
              className="btn button-startstop"
              onClick={() => resetTimer()}
            >
              {" "}
              Reset{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Timer;
