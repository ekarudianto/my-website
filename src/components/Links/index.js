import React, { Component } from 'react';
import './Links.scss';

class Links extends Component {
  render() {
    return (
      <div className='links'>
        <a className='link' href='https://github.com/ekarudianto' rel="noopener noreferrer" target='_blank'>Github</a>&nbsp;&nbsp;
        <a className='link' href='https://www.linkedin.com/in/ekarudianto/' rel="noopener noreferrer" target='_blank'>Linkedin</a>
      </div>
    );
  }
}

export default Links;
