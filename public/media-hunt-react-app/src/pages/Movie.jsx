import { SearchBox } from "../scripts/search";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMoviesDiscover } from "../HTTP/movie";
import { addMovies, resetMovies } from "../state/features/movies";
import { Link } from "react-router-dom";

export default function Movie() {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.index);
  const page = useSelector((page) => page.movies.page);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchInitialData();
    return () => dispatch(resetMovies());
  }, []);

  const fetchInitialData = async () => {
    const data = await getMoviesDiscover(page);
    dispatch(addMovies(data.results));
  };

  function handleGoMovieDetails() {
    navigate(":id");
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div
        className="flex items-center content-center box"
        style={{
          marginTop: "15px",
          height: "50px",
          backgroundColor: "rgba(52, 52, 52, 0.8",
          fontSize: "30px",
          color: "white",
        }}
      >
        Browse your favourite Movie
      </div>
      <div className="boxSearch">
        <SearchBox onClick={handleGoMovieDetails} />
        {movies?.length > 0 &&
          movies.map((movie) => <Link to={`/movie/${movie.id}`}>{movie.title}<br></br></Link>
          )}
        <div>
          <button onClick={fetchInitialData}>Load more...</button>
        </div>  
      </div>
    </div>
  );
}
