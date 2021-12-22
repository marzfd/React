import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Weather</h3>
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:cityId" element={<Forecast />} />
          </Routes>
        </main>

        <footer>&copy; 2021 Created by Marzieh !</footer>
      </Router>
    </GlobalProvider>
  );
}

export default App;