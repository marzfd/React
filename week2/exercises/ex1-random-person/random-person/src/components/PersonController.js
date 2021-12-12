import { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [person, setPerson] = useState({});

  function getPerson() {
    fetch('https://randomuser.me/api?results=1')
      .then(response => response.json())
      .then(data => setPerson(data.results[0]))
  }

  useEffect(() => {getPerson()}, []);

  return (
    <main>
      <Person person={person} />
    </main>
  )
}

export default PersonController;