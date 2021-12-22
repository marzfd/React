import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

<<<<<<< HEAD
function CityInfo( { weatherData } ) {

  const {
=======
function CityInfo({weatherData}) {

  const {
      id,
      name,
      sys: { country },
      weather: [{ main, description }],
       main: { temp_min, temp_max },
       coord: { lat, lon }
    } = weatherData

  const {
>>>>>>> 89f85b94f1b522a0c02ecbddcab843d08f79dbea
    handleDelete,
    handleForecast
  } = useContext(GlobalContext);

  return (
    <>
      <div className="city-list">
      <ul>
        <li>
<<<<<<< HEAD
        <h3><em>{weatherData.name}, {weatherData.sys.country}</em></h3>
          <h4>{weatherData.weather[0].main}</h4>
          <p className="desc"><em>{weatherData.weather[0].description}</em></p>
          <p>Min temp: {(weatherData.main.temp_min).toFixed(2)} &deg;C </p>
          <p>Max temp: {(weatherData.main.temp_max).toFixed(2)} &deg;C</p>
          <p>Location: {weatherData.coord.lon}, {weatherData.coord.lat}</p>
=======
           <h3><em>{name}, {country}</em></h3>
          <h4>{main}</h4>
          <p className="desc"><em>{description}</em></p>
          <p>Min temp: {(temp_min).toFixed(2)} &deg;C </p>
          <p>Max temp: {(temp_max).toFixed(2)} &deg;C</p>
          <p>Location: {lon}, {lat}</p>
>>>>>>> 89f85b94f1b522a0c02ecbddcab843d08f79dbea
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