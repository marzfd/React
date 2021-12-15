import logo from './logo.svg';
import './App.css';
import SearchCity from './components/SearchCity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Weather</h2>
      </header>

      <main>
        <div className='searchBox'>
          <SearchCity />
        </div>
      </main>

      <footer>&copy; 2021 Created by Marzieh !</footer>
    </div>
  );
}

export default App;
