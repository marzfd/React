import React from "react";

const CityInfo = ( {allData} ) => {

  return (
    <div className="city-list">
      <ul>
        <li>
          <h3>{allData.name} ,{allData.sys.country}</h3>
          <h4>{allData.weather[0].main}</h4>
          <p className="desc">{allData.weather[0].description}</p>
          <p>min temp: {(allData.main.temp_min).toFixed(2)} &deg;C </p>
          <p>max temp: {(allData.main.temp_max).toFixed(2)} &deg;C</p>
          <p>location: {allData.coord.lon}, {allData.coord.lat}</p>
        </li>
      </ul>
     </div>
  )
};

export default CityInfo;