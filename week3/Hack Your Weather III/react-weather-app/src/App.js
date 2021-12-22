import logo from './logo.svg';
import './App.css';
import SearchCity from './components/SearchCity';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Weather</h3>
        </header>

        <main>
          <div className="searchBox">
            <SearchCity />
          </div>
        </main>

        <footer>&copy; 2021 Created by Marzieh !</footer>
    </GlobalProvider>
  );
}

export default App;