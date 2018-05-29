import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from '@/components/About';
import Links from '@/components/Links';
import Email from '@/components/Email';

class Home extends Component {
  render() {
    return (
      <div className='site'>
        <Email />
        <About />
        <Links />
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
};

export default Home;
