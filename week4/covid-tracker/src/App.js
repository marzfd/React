import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState();
  const [dailyData, setDailyData] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch Data
  const url = 'https://covid19.mathdro.id/api';
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

  useEffect(() => {
    async function fetchCountries() {
      const { data: { countries } } = await axios(`${url}/countries`);

      const covidCountries = countries.map(country => country.name);
      setCountries(covidCountries)
    }
    fetchCountries();
  }, [])

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
        <p>
          Covid-19 Tracker
        </p>
      </header>

      <main className={styles.container}>
        {data && <Cards data={data}/>}
        <CountryPicker countries={countries} handleCountryChange={handleCountryChange}/>
        <Charts dailyData={dailyData} data={data} countries={countries}/>
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