import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function CityInfo() {

  const {
    weatherData: {
      id,
      name,
      sys: { country },
      weather: [{ main, description }],
       main: { temp_min, temp_max },
       coord: { lat, lon }
    },
    handleDelete,
    handleForecast
  } = useContext(GlobalContext);


  return (
    <>
      <div className="city-list">
      <ul>
        <li>
          <h3><em>{name}, {country}</em></h3>
          <h4>{main}</h4>
          <p className="desc"><em>{description}</em></p>
          <p>Min temp: {(temp_min).toFixed(2)} &deg;C </p>
          <p>Max temp: {(temp_max).toFixed(2)} &deg;C</p>
          <p>Location: {lon}, {lat}</p>
        </li>
      </ul>

      <div>
        <button
          className='forecastBtn'
          onClick={() => {
            console.log('forecast button clicked');
            handleForecast(id);
          }}
        >
          5-day Forecast
        </button>
        <button
          className='deleteBtn'
          onClick={() => {
            console.log('City is deleted');
            handleDelete(id);
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