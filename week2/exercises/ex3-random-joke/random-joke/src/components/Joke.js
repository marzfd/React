import React from 'react'

function Joke({ joke }) {
  return (
    <div>
      <img src={joke.icon_url} alt="icon" />
      <p>
        {joke.value}
      </p>
      <p>
      </p>
    </div>
  )
}

export default Joke
