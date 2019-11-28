import React, { useState, useEffect, Fragment } from 'react';
import Paginator from 'react-hooks-paginator';

import './portfolio.css';
import Navprojects from '../navprojects/navprojects'

const Portfolio = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [persons, setPersons] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setPersons(data.results)
        setPages(data.info.pages)
      })
  }, [currentPage]);

  const pageNumbers = new Array(pages).fill(null).map((it, index) => index + 1)

  return (
    <Fragment>
      <Navprojects />
      <div className="portfolio">
        <Paginator
          totalRecords={pageNumbers.length}
          pageLimit={pages}
          pageNeighbours={2}
          pagePrevText='« Prev'
          setOffset={() => { }}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNextText='Next »'
        />
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
