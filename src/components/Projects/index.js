import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss'

export default function Projects() {
  return (
    <div className='site container'>
      <h2>My pet projects</h2>
      <ul>
        <Link to='/forex-trading' className='link'>Forex trading formulas</Link>
      </ul>
    </div>
  );
}
