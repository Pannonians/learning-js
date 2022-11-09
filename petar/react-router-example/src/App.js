import { Link, useRoutes } from "react-router-dom";
import Routes from "./Routes";

// import Routes from "./Routes";
import routes from './routes'

function App() {
  // const routeResult = useRoutes(routes);
  return (
    <>
      <header>
        <strong>React Router</strong>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* {routeResult} */}
        <Routes />
      </main>
    </>
  );
}

export default App;
