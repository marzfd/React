import logo from './logo.svg';
import './App.css';
import DogGallery from './components/DogGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dog Photo Gallery
        </p>
      </header>

      <DogGallery />

      <footer>
        <p>&copy; 2021 Created by Marzieh !</p>
      </footer>
    </div>
  );
}

export default App;
