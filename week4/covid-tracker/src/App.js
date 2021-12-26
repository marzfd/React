import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import axios from 'axios';
import coronaImage from './img/covid-19.png'

function App() {

  const [data, setData] = useState();
  const [dailyData, setDailyData] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch Data
  const url = 'https://covid19.mathdro.id/api';

  //All Data
  useEffect(() => {
    async function fetchData() {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios(url);

      const covidData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate
      }
      setData(covidData);
    }
    fetchData();
  }, []);

  // Daily Data
  useEffect(() => {
    async function fetchDailyData() {
      const { data } = await axios(`${url}/daily`);

      const covidDailyData = data.map(({ confirmed, recovered, deaths, reportDate: date }) => (
        {
          confirmed: confirmed.total,
          recovered: recovered.total,
          deaths: deaths.total,
          date
        }
      ));
      setDailyData(covidDailyData)
    }
    fetchDailyData();
  }, []);

  // List of Countries
  useEffect(() => {
    async function fetchCountries() {
      const { data: { countries } } = await axios(`${url}/countries`);

      const covidCountries = countries.map(country => country.name);
      setCountries(covidCountries)
    }
    fetchCountries();
  }, [])

  // Specific Country Data
  async function handleCountryChange(country) {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios(`${url}/countries/${country}`);

    const covidCountryData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    }
    setData(covidCountryData);
  }


  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
      </header>

      <main className={styles.container}>
        <img src={coronaImage} className={styles.img} alt='covid-19'/>
        {data && <Cards data={data}/>}
        <CountryPicker countries={countries} handleCountryChange={handleCountryChange}/>
        <Charts dailyData={dailyData}/>
      </main>

      <footer>
      <p>
        &copy; 2021 Created by Marzieh ! <br />
        <small><em>Inspired by JavaScript Mastery</em></small>
      </p>
      </footer>
    </div>
  );
}

export default App;