import { SearchBox } from "../scripts/search";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTvDiscover } from "../HTTP/tv";
import { addTvShows } from "../state/features/tvShows";

export default function Tv() {
  const navigate = useNavigate();
  const tvShows = useSelector((state) => state.tvShows.index);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTvData();
  }, []);

  const fetchTvData = async () => {
    const data = await getTvDiscover();
    dispatch(addTvShows(data.results));
  };

  function TvDetails() {
    navigate("/Tv/tvDetails");
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
        Browse your favourite Tv Show
      </div>
      <div className="boxSearch">
        <SearchBox onClick={TvDetails} />
        {tvShows?.length > 0 &&
          tvShows.map((tv) => {
            return <div key={tv.id}>{tv.name}</div>;
          })}
      </div>
    </div>
  );
}
