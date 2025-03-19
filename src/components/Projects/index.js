import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss'

export default function Projects() {
  return (
    <div className='site container'>
      <h2>My pet projects</h2>
      <ul>
        <li>
          <Link to='/forex-trading' className='link'>Forex trading formulas</Link>
        </li>
        <li>
          <a href='/capital-screener/index.html'>Capital.com screener</a>
        </li>
        <li>
          <Link to='/trade-journal' className='link'>Trade journal</Link>
        </li>
      </ul>
    </div>
  );
}
