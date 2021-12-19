import React, { useState, useContext } from 'react'
import ReactTooltip from 'react-tooltip';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  return (
    <div className='newItem'>
    <h3>Add new Transaction</h3>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTransaction({
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
          })
          setText('')
          setAmount(0)
        }}
      >
        <input
          type="text"
          value={text}
          onChange={
            (e) => setText(e.target.value)
          }
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={
            (e) => setAmount(e.target.value)
          }
          placeholder="Amount"
          data-tip='Positive: Income,  Negative: Expense'
        />
        <ReactTooltip />
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
