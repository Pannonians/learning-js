import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <>
      <header>
        <strong>TMDB Movie Database</strong>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* {routeResult} */}
        <Routes />
      </main>
    </>
  )
}

export default App;
