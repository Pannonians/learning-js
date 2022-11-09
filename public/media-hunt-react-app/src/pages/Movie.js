import { SearchBox } from "../scripts/search";
import { useNavigate } from "react-router";

export default function Movie () {
  const navigate = useNavigate();

  function handleGoMovieDetails() {
    navigate("/Movie/movieDetails");
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
            <SearchBox onClick={handleGoMovieDetails}/>
          </div>          
        </div>
      );
    }
