import React, { Fragment } from 'react'

import './portfoliopage.css';
import Navprojects from '../navprojects/navprojects';

const Portfoliopage = ({ children }) => {
  return (
    <Fragment>
      <Navprojects />
      <div className="p-page">
        {children}
      </div>
    </Fragment>


  )
}

export default Portfoliopage;