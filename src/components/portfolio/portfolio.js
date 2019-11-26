import React, { useState, useEffect, Fragment } from 'react';

import './portfolio.css';
import Navprojects from '../navprojects/navprojects'

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [persons, setPersons] = useState([]);
  const [pageLimit, setPageLimit] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setPersons(data.results)
        setPageLimit(data.info.pages)
      })
  }, [currentPage]);

  const pageNumber = new Array(pageLimit).fill(null).map((it, index) => index + 1)
  return (
    <Fragment>
      <Navprojects />
      <div className="portfolio">
        <div className="paginate">
          {pageNumber.map(page => <span onClick={() => setCurrentPage(page)}>{page}</span>)}
        </div>
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
    </Fragment >
  )

}

export default Portfolio;
