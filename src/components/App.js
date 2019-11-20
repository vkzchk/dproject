import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './header'
import Content from './content'
import Navbar from './navbar';

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
