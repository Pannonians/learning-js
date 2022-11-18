import Timer from "./timer";

function Pomodoro() {
  return (
    <div>
      <div className="row pomodoro container">
        <div className="col-sm-12 center"><Timer /></div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-sm-12 todos center">List of tasks</div>
      </div>
    </div>
    
  );
}

export default Pomodoro;