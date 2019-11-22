import React, { useState, useEffect } from 'react';

import './content.css';

const Content = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => { setPersons(data) })
  }, []);
  return (
    <div className="content">
      <div className="items">
        {
          persons.map(person => (
            <div>
              <div>{person.image}</div>
              <div>{person.name}</div>
              <div>{person.status}</div>
              <div>{person.species}</div>
              <div>{person.gender}</div>
            </div>
          ))
        }
      </div>
    </div>
  )

}

export default Content;
