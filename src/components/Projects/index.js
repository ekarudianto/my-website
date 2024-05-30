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
          <a href='/style.css'>Capital.com screener</a>
        </li>
      </ul>
    </div>
  );
}
