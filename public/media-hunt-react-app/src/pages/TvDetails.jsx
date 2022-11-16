import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getTv } from '../HTTP/tv';

export default function TvDetails() {
  const params = useParams()
  const tvDetails = useSelector((state) => state.tvShows.details[params.id])
  const [tv, setTv] = useState('');

  const getData = async () => {
    if (tvDetails) return
    const data = await getTv(params.id)
    setTv(data)
  }

  useEffect(() => {
    getData()
  })


  return <>
    <div className='App-result'>
      <div>
        <div>{JSON.stringify(tvDetails)}</div>
        <div>Tv ID: {params.id}</div>
        <br></br>
        <div>
          <label>Title: </label> <br></br>
          {JSON.stringify(tv.name)}<br></br><br></br>
        </div>
        <div>
          <label>Tagline: </label> <br></br>
          {JSON.stringify(tv.tagline)}<br></br><br></br>
        </div>
        <div></div>
        <div>
          <label>Number of episodes: </label> <br></br>
          {JSON.stringify(tv.number_of_episodes)}<br></br><br></br>
        </div>
        <div>
          <label>Popularity: </label> <br></br>
          {JSON.stringify(tv.popularity)}<br></br><br></br>
        </div>
        <div>
          <label>Number of seasons: </label> <br></br>
          {JSON.stringify(tv.number_of_seasons)}<br></br><br></br>
        </div>
        <div>
          <label>Overview: </label> <br></br>
          {JSON.stringify(tv.overview)}<br></br><br></br>
        </div>
        <div>
          <label>Release date: </label> <br></br>
          {JSON.stringify(tv.first_air_date)}<br></br><br></br>
        </div>
        <div>
          <label>Vote average: </label> <br></br>
          {JSON.stringify(tv.vote_average)}<br></br><br></br>
        </div>
      </div>
      <div>
        <div>
          <label>Image: </label> <br></br>
          <img src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} alt="movieImageError" /><br></br>
        </div>
      </div>
    </div>
  </>
}
