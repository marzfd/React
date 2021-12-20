import React from "react";

const CityInfo = ( {weatherData} ) => {

  return (
    <div className="city-list">
      <ul>
        <li>
          <h3>{weatherData.name} !{/*weatherData.sys.country*/}</h3>
          {/* <h4>{weatherData.weather[0].main}</h4>
          <p className="desc">{weatherData.weather[0].description}</p>
          <p>min temp: {(weatherData.main.temp_min).toFixed(2)} &deg;C </p>
          <p>max temp: {(weatherData.main.temp_max).toFixed(2)} &deg;C</p>
          <p>location: {weatherData.coord.lon}, {weatherData.coord.lat}</p> */}
        </li>
      </ul>
     </div>
  )
};

export default CityInfo;