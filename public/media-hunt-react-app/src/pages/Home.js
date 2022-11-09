import {useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [ queryParams ] = useSearchParams();
  const selectedColor = queryParams.get("color");

  function handleGoMovie() {
    navigate("/Movie");
  }

  function handleGoTv() {
    navigate("/Tv");
  }

  return (
      <div className="App">
          <header className="App-header"></header>
          <div
            className="flex items-center content-center box"
            style={{
              marginTop: "15px",
              height: "50px",
              fontSize: "30px",
              color: "white",
            }}
          >
              <div className="product">
      <h2>Welcome to Movie database</h2>
      {selectedColor && (
        <h3 style={{ color: selectedColor }}>
          Selected color: {selectedColor}
        </h3>
      )}
      <div className="actions">
        <button onClick={handleGoMovie}>Browse movie</button>
        <button onClick={handleGoTv}>Browse tv</button>
      </div>
    </div>
          </div>
        </div>
      
  );
}