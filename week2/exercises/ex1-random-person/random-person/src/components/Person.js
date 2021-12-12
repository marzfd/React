import React from 'react'

function Person({ person }) {


  const { name, picture, email} = person;

  return (
    <div className="person">
      {picture && <img src={picture.large} alt={name.first} />}
      {name && <ul>
        <li>First Name: {name.first}</li>
        <li>Last Name: {name.last}</li>
        <li>Email: {email}</li>
      </ul>}
    </div>
  )
}

export default Person;

