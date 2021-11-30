import Counter from './components/Counter.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>React Counter App</h1>
        <Counter />
      </main>
      <footer>&copy; 2021 Created By Marzieh !</footer>
    </div>
  );
}

export default App;
