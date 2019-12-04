import React from 'react';
import { Link } from 'react-router-dom'

import styles from './navprojects.module.css';


const Navprojects = () => {
  return (
    <nav className={styles.navprojects}>
      <ul>
        <li><Link to="/portfolio/fetchapi">Fetch data from API</Link></li>
        <li><Link to="/portfolio/renderprops">Render Props</Link></li>
        <li><Link to="/portfolio/dummytwo">Dummy 2</Link></li>
      </ul>
    </nav>
  );
}
export default Navprojects;