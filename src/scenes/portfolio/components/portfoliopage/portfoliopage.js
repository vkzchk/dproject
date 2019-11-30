import React, { Fragment } from 'react'

import styles from './portfoliopage.module.css';
import Navprojects from '../navprojects/navprojects';

const Portfoliopage = ({ children }) => {
  return (
    <Fragment>
      <Navprojects />
      <div className={styles.pPage}>
        {children}
      </div>
    </Fragment>


  )
}

export default Portfoliopage;