import logo from './logo.svg';
import PersonController from './components/PersonController';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Random Person
        </p>
      </header>
      <PersonController />

      <footer>
        <p>&copy; 2021 Created by Marzieh !</p>
      </footer>
    </div>
  );
}

export default App;
