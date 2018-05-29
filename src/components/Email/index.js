import React, { Component } from 'react';
import Mail from 'react-icons/lib/io/ios-email-outline';
import './Email.scss';

class Email extends Component {
  render() {
    return (
      <div className='email'>
        <a href='mailto:ekarudianto89@gmail.com'><Mail size={40} style={{color: '#003D6B'}} /></a>
      </div>
    );
  }
}

export default Email;
