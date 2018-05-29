import appConfig from '@/config/appConfig.json';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Typed from 'react-typed';
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
          <h2 className='title no-margin'>Eka Rudianto</h2>
          <span className='line'></span>
          <p>
            <Typed 
              strings={this.state.typedOptions.strings}
              typeSpeed={this.state.typedOptions.typeSpeed}
              backSpeed={this.state.typedOptions.backSpeed}
              backDelay={this.state.typedOptions.backDelay}
              loop={this.state.typedOptions.loop}
              startDelay={this.state.typedOptions.startDelay}
            />
          </p>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  name: PropTypes.string,
};

export default About;
