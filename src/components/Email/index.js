import MailIcon from 'react-icons/lib/io/ios-email-outline';
import React, { Component } from 'react';
import './Email.scss';

class Email extends Component {
  render() {
    return (
      <div className='email'>
        <a href='mailto:ekarudianto89@gmail.com'><MailIcon size={40} style={{color: '#003D6B'}} /></a>
      </div>
    );
  }
}

export default Email;
