import React, { useState, useEffect } from 'react';

import './content.css';

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => {
        setData(
          JSON.stringify(data)
        )
      })
  }, []);
  return (
    <div className="content">
      <div className="items">
        <span>{data}</span>
      </div>
    </div>
  )

}

export default Content;
