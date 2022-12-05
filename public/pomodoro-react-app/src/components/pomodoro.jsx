import Timer from "./timer";
import Todo from "./todo";
import Carousel from "./carousel"

function Pomodoro() {
  return (
    <div>
      <div className="row pomodoro">
        <div className="col-sm-12 center"><Timer /></div>
      </div>
      <div className="row todopadding">
        <div className="col-sm-12 todos">
          <Todo />
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-12 carousel"><Carousel /></div>
      </div>
    </div>
  );
}

export default Pomodoro;
