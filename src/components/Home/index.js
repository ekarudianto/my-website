import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from '@/components/About';
import Connect from '@/components/Connect';

class Home extends Component {
  render() {
    return (
      <div className='site'>
        <About />
        <Connect />
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
};

export default Home;
