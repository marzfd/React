import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <header className="App-header">
        <Header />
      </header>

      <main className="App">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </main>
 
      <footer>
        <p>
          &copy; 2021 Created by Marzieh ! <br />
          <span>(Inspired by MediaTravercy)</span>
        </p>
      </footer>
    </GlobalProvider>
  );
}

export default App;
