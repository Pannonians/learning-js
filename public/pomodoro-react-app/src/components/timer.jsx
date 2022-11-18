import { useEffect, useState } from "react";
import Settings from "./settings";

function Timer() {
  const [time, setTime] = useState(25 * 60) // time in seconds 
  const [isActive, setIsActive] = useState(false)
  const [displayMessage, setDisplayMessage] = useState('Start timer')

  const getTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  }

  const startTimer = () => {
    setIsActive(!isActive)
    setDisplayMessage(!isActive ? 'Ticking' : 'Pause')
  }

  const resetTimer = () => {
    setTime(25 * 60);
    setIsActive(false)
    setDisplayMessage(isActive ? 'Ticking' : 'Start timer')
  }

  useEffect(() => {
    if (time > 0 && isActive) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000)
      return () => clearInterval(interval)
    }

  }, [time, isActive]);

  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-12 left" ><Settings /></div>
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
            <button className="btn button-startstop" onClick={startTimer}>{isActive ? 'Stop' : 'Start'}</button>
            <button className="btn button-startstop" onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;