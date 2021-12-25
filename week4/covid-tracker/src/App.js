import React from 'react';
import logo from './logo.svg';
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';

function App() {
  return (
    <div style={styles.App}>
      <header style={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p>
          Covid-19 Tracker
        </p>
      </header>

      <main>
        <Cards />
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
