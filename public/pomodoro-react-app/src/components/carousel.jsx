import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item >
        <h4 className='center'>What is it?</h4> <br></br>
        <p>The Pomodoro Technique is a time management method that can be used for any task. For many people, time is an enemy. The anxiety triggered by “the ticking clock”, especially when it involves a deadline, leads to ineffective work and study habits which in turn lead to procrastination.<br></br><br></br>
          The aim of the Pomodoro Technique is to use time as a valuable ally in accomplishing what we want to do in the way we want to do it, and to enable us to improve continually the way we work or study.</p>
      </Carousel.Item>
      <Carousel.Item >
        <h4 className='center'>The Goals</h4> <br></br>
        The Pomodoro Technique will provide a simple tool/process for improving productivity (your own and that of your team members) which can do the following:
        <br></br><br></br>
        <ul>
          <li>Alleviate anxiety linked to beginning</li>
          <li>Enhance focus and concentration by cutting down on interruptions</li>
          <li>Increase awareness of your decisions</li>
          <li>Boost motivation and keep it constant</li>
          <li>Bolster the determination to achieve your goals</li>
          <li>Refine the estimation process, both in qualitative and quantitative terms</li>
          <li>Improve your work or study process</li>
          <li> Strengthen your resolve to keep on applying yourself in the face of complex situations</li>
        </ul>
      </Carousel.Item>
      <Carousel.Item>
        <h4 className='center'>The Basics</h4> <br></br>
        <p>At the beginning of each day select the tasks you need to complete and put them on the TODO list above.</p>

        <p>Start working:</p>

        <ol>
          <li>Start the Pomodoro timer</li>
          <li>Work until the Pomodoro rings</li>
          <li>Take a short break (3-5 minutes)</li>
        </ol>

        <p>Keep on working, Pomodoro after Pomodoro, until the task at hand is finished. Every 4 Pomodoros take a longer break, (15-30 minutes).</p>
      </Carousel.Item>
      <Carousel.Item>
        <h4 className='center'>Rules & Tips</h4> <br></br>
        <ul>
          <li>If a task takes more than 5–7 Pomodoros, break it down</li>
          <li>If it takes less than one Pomodoro, add it up, and combine it with another task</li>
          <li>Once a Pomodoro begins, it has to ring</li>
          <li>The next Pomodoro will go better</li>
          <li>Login to the service and track your progress</li>
          <li>The Pomodoro Technique shouldn’t be used for activities you do in your free time. Enjoy free time!</li>
        </ul>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;