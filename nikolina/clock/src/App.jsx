import React, { useEffect, useState } from "react";
import "./App.css";

const Clock = ({date}) => {
  return <div>{date.toUTCString()}</div>;
};

function App() {
  const [date, setDate] = useState(new Date());

  //ovo ce biti neka promena
  

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Clock date={date} />
      </header>
    </div>
  );
}

export default App;
