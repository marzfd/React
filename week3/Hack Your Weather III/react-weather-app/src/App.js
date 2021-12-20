import logo from './logo.svg';
import './App.css';
import SearchCity from './components/SearchCity';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Weather</h3>
      </header>

      <main>
        <div className='searchBox'>
          <SearchCity />
        </div>
      </main>

      <footer>&copy; 2021 Created by Marzieh !</footer>
    </>
  );
}

export default App;
