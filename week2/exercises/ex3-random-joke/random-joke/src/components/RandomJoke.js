import { useState, useEffect } from 'react';
import Joke from './Joke';

function RandomJoke() {

  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect( getJoke => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setJoke(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
      <Joke joke={joke} />
      )}
    </div>
  )
}

export default RandomJoke
