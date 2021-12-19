import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {

  const { transactions } = useContext(GlobalContext);

  if (transactions.length === 0) {
    return (
      <div className='empty'>
        <p>No transactions yet !</p>
      </div>
    )
  }

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
