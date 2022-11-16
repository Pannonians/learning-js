import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getMovie } from '../HTTP/movie';

export default function MovieDetails() {
  const params = useParams()
  const movieDetails = useSelector((state) => state.movies.details[params.id])
  const [movie, setMovies] = useState('');

  const getData = async () => {
    if (movieDetails) return
    const data = await getMovie(params.id)
    setMovies(data)
  }

  useEffect(() => {
    getData()
  })

  return <>
    <div className='App-result'>
      <div>
        <div>Move ID: {params.id}</div>
        <br></br>
        <div>
          <label>Title: </label> <br></br>
          {JSON.stringify(movie.title)}<br></br><br></br>
        </div>
        <div>
          <label>Tagline: </label> <br></br>
          {JSON.stringify(movie.tagline)}<br></br><br></br>
        </div>
        <div>
          <label>Popularity: </label> <br></br>
          {JSON.stringify(movie.popularity)}<br></br><br></br>
        </div>
        <div>
          <label>Overview: </label> <br></br>
          {JSON.stringify(movie.overview)}<br></br><br></br>
        </div>
        <div>
          <label>Release date: </label> <br></br>
          {JSON.stringify(movie.release_date)}<br></br><br></br>
        </div>
        <div>
          <label>Vote average: </label> <br></br>
          {JSON.stringify(movie.vote_average)}<br></br><br></br>
        </div>
      </div>
      <div>
        <div>
          <label>Image: </label> <br></br>
          <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="movieImageError" /><br></br>
        </div>
      </div>
    </div>
  </>
}