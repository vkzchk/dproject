import React from 'react';

import './navprojects.css';

const Navprojects = () => {
  return (
    <nav className="navprojects">
      <ul>
        <li><a href="/fetchapi">Fetch data from API</a></li>
        <li><a href="/dummyone">Dummy 1</a></li>
        <li><a href="/dummytwo">Dummy 2</a></li>
      </ul>
    </nav>
  );
}
export default Navprojects;