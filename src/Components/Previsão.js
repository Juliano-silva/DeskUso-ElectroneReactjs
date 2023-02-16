import { useState } from "react";
import style from './Style.module.css'
const api = {
  key: "30669d8ba178ebe36e484e370edaccce",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Tempo() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
        <div className={style.InputTempo}>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className={style.DivTempo}>
            {/* Location  */}
            <h1>{weather.name}</h1>

            {/* Temperature Celsius  */}
            <h2>{weather.main.temp}°C</h2>

            {/* Condition (Sunny ) */}
            <h3>{weather.weather[0].main}</h3>
            <h4>({weather.weather[0].description})</h4>
          </div>
        ) : (
          ""
        )}
    </div>
  );
}

