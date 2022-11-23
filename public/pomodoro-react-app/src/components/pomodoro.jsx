import Timer from "./timer";
import Todo from "./todo";

function Pomodoro() {
  return (
    <div>
      <div className="row pomodoro container">
        <div className="col-sm-12 center"><Timer /></div>
      </div>
      <div className="row todopadding">
        <div className="col-sm-12 todos"><Todo /></div>
      </div>
    </div>

  );
}

export default Pomodoro;