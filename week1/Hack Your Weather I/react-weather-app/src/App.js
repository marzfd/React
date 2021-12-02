import logo from './logo.svg';
import CityList from './components/CityList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Weather</h2>
      </header>

      <main>
        <CityList />
      </main>

      <footer>&copy; 2021 Created by Marzieh !</footer>
    </div>
  );
}

export default App;
