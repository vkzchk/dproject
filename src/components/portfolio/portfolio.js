import React, { useState, useEffect, Fragment } from 'react';

import './portfolio.css';
import Navprojects from '../navprojects/navprojects'

const Portfolio = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageIndex}`)
      .then(res => res.json())
      .then(data => { setPersons(data.results) })
  }, [pageIndex]);
  return (
    <Fragment>
      <Navprojects />
      <div className="portfolio">
        <button type="button" onClick={() => pageIndex > 1 ? setPageIndex(pageIndex - 1) : 1}>Prev Page</button>
        <button type="button" onClick={() => pageIndex < 25 ? setPageIndex(pageIndex + 1) : 25}>Next Page</button>
        <div className="items">
          {
            persons.map(person => (
              <div className="item">
                <ul>
                  <img alt="" src={person.image} />
                  <li>Name: {person.name}</li>
                  <li>Status: {person.status}</li>
                  <li>Species: {person.species}</li>
                  {person.type ? <li>Type: {person.type}</li> : null}
                  <li>Gender: {person.gender}</li>
                  <li>Origin: {person.origin.name}</li>
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </Fragment>
  )

}

export default Portfolio;
