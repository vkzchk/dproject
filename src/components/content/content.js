import React, { useState, useEffect } from 'react';

import './content.css';

const Content = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => { setPersons(data.results) })
  }, []);
  return (
    <div className="content">
      <div className="items">
        {
          persons.map(person => (
            <div className="item">
              <ul>
                <img src={person.image} />
                <li>Name: {person.name}</li>
                <li>Status: {person.status}</li>
                <li>Species: {person.species}</li>
                <li>Type: {person.type}</li>
                <li>Gender: {person.gender}</li>
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )

}

export default Content;
