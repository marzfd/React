import React, { useContext } from 'react';
import CityInfo from './CityInfo';
import { GlobalContext } from '../context/GlobalState';

function SearchCity() {

  const {
    city,
    setCity,
    found,
    weatherData,
    handleSubmit
  } = useContext(GlobalContext);

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
          disabled={!city}
        >
          Search
        </button>
      </form>

      {!found && <p className='alert'>City Not Found !</p>}
      {(weatherData > 0 && found)
        ? weatherData.map(data => <CityInfo weatherData={data} />)
        : <p className='firstPage'>
          Search a city to get the latest forecast ! <br />
          ⛅☔⛄
        </p>
      }
    </>
  )
}

export default SearchCity;