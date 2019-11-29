import React from 'react';
import { Link } from 'react-router-dom'

import './navprojects.css';


const Navprojects = () => {
  return (
    <nav className="navprojects">
      <ul>
        <li><Link to="/portfolio/fetchapi">Fetch data from API</Link></li>
        <li><Link to="/portfolio/dummyone">Dummy 1</Link></li>
        <li><Link to="/portfolio/dummytwo">Dummy 2</Link></li>
      </ul>
    </nav>
  );
}
export default Navprojects;