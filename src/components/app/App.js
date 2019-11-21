import React from 'react';

import './App.css';
import Header from '../header/header'
import Content from '../content/content'
import Navbar from '../navbar/navbar'

const App = () => {

  return (
    <div className="site-wrap">
      <Header />
      <Navbar />
      <Content />
    </div>
  )

}

export default App;
