import Guarantee from './components/Guarantee';
import logo from './logo.svg';
import freeShipping from './assets/f-delivery.png';
import coin from './assets/coin.png';
import chat from './assets/chat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="guarantee">
          <Guarantee
            img = { freeShipping }
            title = "Free Shipping"
            description = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Guarantee
            img = { coin }
            title = "100% Money Back"
            description = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Guarantee
            img = { chat }
            title = "Online Support 24/7"
            description = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </header>
      <footer>&copy; 2021 Created By Marzieh !</footer>
    </div>
  );
}

export default App;
