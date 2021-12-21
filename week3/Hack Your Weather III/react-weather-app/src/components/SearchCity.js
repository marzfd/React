import { useState } from 'react';
import CityInfo from './CityInfo';

function SearchCity() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [found, setFound] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    if(city) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.message === 'city not found') {
          setFound(false);
        }
        else {
          setWeatherData([data, ...weatherData]);
          setFound(true);
        }
      }
      catch(err) {
        console.log(`Error ! : ${err}`);
      }
    }
    else {
      alert('Please enter a city name !');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className='search'
          type='text'
          value={city}
          placeholder='🔍 Search a City ...'
          onChange={e => setCity(e.target.value)}
        />
        <button
        className='searchBtn'
        type='submit'
        >
          Search
        </button>
      </form>

      {!found && <p className='alert'>City Not Found !</p>}
      {(weatherData.length !== 0 && found)
        ? weatherData.map((data, index) => <CityInfo key={index} weatherData={data} />)
        : <p className='firstPage'>
          Search a city to get the latest forecast ! <br />
          ⛅☔⛄
        </p>
      }
    </>
  )
}

export default SearchCity;