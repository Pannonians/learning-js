import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="movie">
        <Route index element={<Movie />} />
        <Route path=":id" element={<MovieDetails />} />
      </Route>
      <Route path="tv" index element={<Tv />} />
      <Route path="/tv/:id" index element={<TvDetails />} />
    </BaseRoutes>
  );
}
