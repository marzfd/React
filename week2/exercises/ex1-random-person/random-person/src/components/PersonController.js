import { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);

  function getPerson() {
    fetch('https://randomuser.me/api?results=1')
      .then(response => response.json())
      .then(data => {
        setPerson(data.results[0]);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => { getPerson() }, []);

  return (
    <main>
      <Person person={person} loading={loading} />
    </main>
  )
}

export default PersonController;