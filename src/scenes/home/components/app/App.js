import React from 'react';

import './App.css';
import Header from '../header/header';
import Footer from '../footer/footer';


const App = ({ children }) => {

  return (
    <div className="site-wrap">
      <Header />
      {children}
      <Footer />
    </div>
  )

}

export default App;
