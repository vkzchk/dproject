import React, { useState, useEffect, Fragment } from 'react';
import ReactPaginate from 'react-paginate';

import './fetchapi.css';

const Fetchapi = () => {

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

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  return (
    <Fragment>
      <div className="fetchapi">
        <div className="paginate">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={e => handlePageClick(e)}
          />
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

export default Fetchapi;
