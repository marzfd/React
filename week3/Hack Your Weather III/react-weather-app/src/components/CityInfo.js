import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function CityInfo( { weatherData } ) {

  const {
    handleDelete,
    handleForecast
  } = useContext(GlobalContext);

  return (
    <>
      <div className="city-list">
      <ul>
        <li>
        <h3><em>{weatherData.name}, {weatherData.sys.country}</em></h3>
          <h4>{weatherData.weather[0].main}</h4>
          <p className="desc"><em>{weatherData.weather[0].description}</em></p>
          <p>Min temp: {(weatherData.main.temp_min).toFixed(2)} &deg;C </p>
          <p>Max temp: {(weatherData.main.temp_max).toFixed(2)} &deg;C</p>
          <p>Location: {weatherData.coord.lon}, {weatherData.coord.lat}</p>
        </li>
      </ul>

      <div>
        <button
          className='forecastBtn'
          onClick={() => {
            console.log('forecast button clicked');
            handleForecast(weatherData.id);
          }}
        >
          5-day Forecast
        </button>
        <button
          className='deleteBtn'
          onClick={() => {
            handleDelete(weatherData.id);
          }}
        >
          x
        </button>
      </div>
     </div>
    </>
  )
};

export default CityInfo;