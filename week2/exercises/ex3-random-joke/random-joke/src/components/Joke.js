import React from 'react'

function Joke({ joke }) {
  return (
    <div>
      Click for another joke ! <br />
      👇 <br />
      <button
        onClick={() => {window.location.reload()}}
      >
        <img src={joke.icon_url} alt="icon" />
        </button>
      <p>
        {joke.value}
      </p>
    </div>
  )
}

export default Joke;