import React, { useState, useEffect } from 'react';

import './content.css';

const Content = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageIndex}`)
      .then(res => res.json())
      .then(data => { setPersons(data.results) })
  }, [pageIndex]);
  return (
    <div className="content">
      <button type="button" onClick={() => pageIndex > 1 ? setPageIndex(pageIndex - 1) : 1}>Prev Page</button>
      <button type="button" onClick={() => pageIndex < 25 ? setPageIndex(pageIndex + 1) : 25}>Next Page</button>
      <div className="items">
        {
          persons.map(person => (
            <div className="item">
              <ul>
                <img src={person.image} />
                <li>Name: {person.name}</li>
                <li>Status: {person.status}</li>
                <li>Species: {person.species}</li>
                {person.type ? <li>Type: {person.type}</li> : null}
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
