import logo from './logo.svg';
import './App.css';
import RandomJoke from './components/RandomJoke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Random Joke
        </p>
      </header>
      <main>
        <RandomJoke />
      </main>
      <footer>
        <p>&copy; 2021 Created by Marzieh !</p>
      </footer>
    </div>
  );
}

export default App;
