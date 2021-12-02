import React from 'react';
import cityWeather from '../city-weather.json';

const CityList = () => {
    return (
        <div className="city-list">
            <ul>
                {cityWeather.map(city => (
                  <li key={city.id}>
                    <h3>{city.name}, {city.sys.country}</h3>
                    <h4>{city.weather[0].main}</h4>
                    <p class="desc">{city.weather[0].description}</p>
                    <p>min temp: {parseFloat(((city.main.temp_min)-273.15).toFixed(2))} &deg;C </p>
                    <p>max temp: {parseFloat(((city.main.temp_max)-273.15).toFixed(2))} &deg;C</p>
                    <p>location: {city.coord.lat}, {city.coord.lon}</p>
                  </li>
                ))}
            </ul>
        </div>
    );
};

export default CityList;
