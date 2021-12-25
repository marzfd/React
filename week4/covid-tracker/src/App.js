import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState();

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
  }, [])

  return (
    <div style={styles.App}>
      <header style={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p>
          Covid-19 Tracker
        </p>
      </header>

      <main>
        {data && <Cards data={data}/>}
        <CountryPicker />
        <Charts />
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
