import React, { useState, createContext } from "react";

// Initial state
const initialState = { cities: [] };

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {

  // States
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [found, setFound] = useState(true);

  // Fetches weather data
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

  // Remove city from list
  const handleDelete = (id) => {
    const newWeatherData = weatherData.filter(city => city.id !== id);
    setWeatherData(newWeatherData);
  }

  // Fetches 5-day forecast
  const handleForecast = async (id) => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    }
    catch(err) {
      console.log(`Error ! : ${err}`);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        setWeatherData,
        found,
        setFound,
        handleSubmit,
        handleDelete,
        handleForecast
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};