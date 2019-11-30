import React from 'react';

import styles from './App.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';


const App = ({ children }) => {

  return (
    <div className={styles.siteWrap}>
      <Header />
      {children}
      <Footer />
    </div>
  )

}

export default App;
