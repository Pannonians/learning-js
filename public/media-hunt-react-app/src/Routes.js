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
      <Route path="Movie">
        <Route index element={<Movie />} />
        <Route path="/Movie/movieDetails" element={<MovieDetails />} />
      </Route>
      <Route path="Tv" index element={<Tv />} />
      <Route path="/Tv/tvDetails" index element={<TvDetails />} />
    </BaseRoutes>
  );
}
