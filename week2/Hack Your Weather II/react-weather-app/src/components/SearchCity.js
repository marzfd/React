import { useState } from 'react';
import CityInfo from './CityInfo';

function SearchCity() {

  const [city, setCity] = useState('');
  const [allData, setAllData] = useState();
  const [isCity, setIsCity] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    if(city) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.message === 'city not found') {
          console.log('City is not found !')
          setIsCity(true)
        }
        else {
          setAllData(data);
          setIsCity(false)
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

      {isCity && <p className='alert'>City is not found !</p>}
      {(allData && !isCity) && <CityInfo allData={allData} />}
    </>
  )
}

export default SearchCity;