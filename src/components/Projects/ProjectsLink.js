import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';

export default function ProjectsLink() {
  return (
    <div className='projects'>
      <Link to="/projects" className='link--state-hide'>Projects</Link>
    </div>
  )
}
