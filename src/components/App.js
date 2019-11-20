import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(res => res.json())
      .then(data => {
        setNames(data)
      })
  }, []);
  return (
    <div>
      {names.name}
    </div>
  )

}

export default App;
