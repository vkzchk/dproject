import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './header'

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, []);
  return (
    <div>
      <Header />
      <img src={data.image} />
      <ul>
        <li>{data.name}</li>
        <li>{data.status}</li>
        <li>{data.species}</li>
        <li>{data.gender}</li>
      </ul>
    </div>
  )

}

export default App;
