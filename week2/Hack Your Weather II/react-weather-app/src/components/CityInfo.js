import React from "react";

const CityInfo = ({ city }) => {

  const {
    name,
    sys: { country },
    weather: [{ main, description }],
    main: { temp_min, temp_max },
    coord: { lon, lat }
  } = city

  return (
    <div className="city-list">
        <ul>
          <li>
            <h3>{name}, {country}</h3>
            <h4>{main}</h4>
            <p class="desc">{description}</p>
            <p>min temp: {(temp_min).toFixed(2)} &deg;C </p>
            <p>max temp: {(temp_max).toFixed(2)} &deg;C</p>
            <p>location: {lon}, {lat}</p>
          </li>
        </ul>
    </div>
  );
};

export default CityInfo;