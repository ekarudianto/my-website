import React, { Component } from 'react';
import PropTypes from 'prop-types';
import appConfig from '@/config/appConfig.json';
import './About.scss';

class About extends Component {
  constructor(props) {
    super(props);
    const typedOptions = appConfig.typedOptions;

    this.state = {
      typedOptions,
    };
  }

  render() {
    return (
      <div className='site__col site__col--about'>
        <div className='site__content'>
          <h2 className='title'>Eka Rudianto</h2>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  name: PropTypes.string,
};

export default About;
