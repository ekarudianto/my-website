import About from '@/components/About';
import Email from '@/components/Email';
import Links from '@/components/Links';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
