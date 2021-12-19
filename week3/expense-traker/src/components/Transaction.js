import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function Transaction({ transaction }) {

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li
      key={transaction.id}
      className={transaction.amount > 0 ? 'plus' : 'minus'}
    >
      {transaction.text}
      <span>
        {transaction.amount > 0 ? '+' : '-'}
        {' '}${Math.abs(transaction.amount)}
      </span>
      <button
        className='deleteBtn'
        onClick={
          () => deleteTransaction(transaction.id)
        }
      >
        x
      </button>
    </li>
  )
}

export default Transaction