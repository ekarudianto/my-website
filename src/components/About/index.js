import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
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
          <Typed
            className='welcome-title' 
            strings={this.state.typedOptions.strings}
            loop={this.state.typedOptions.loop}
            typeSpeed={this.state.typedOptions.typeSpeed}
            backSpeed={this.state.typedOptions.backSpeed}
            backDelay={this.state.typedOptions.backDelay}
          />
          <p>
            My name is Eka Rudianto. I&apos;m a software engineer, from Indonesia and currently residing in Malaysia.
            <br /><br />
            Links
            <span className='line'></span>
            <a className='link' href='https://www.facebook.com/ekarudianto' rel="noopener noreferrer" target='_blank'>Facebook</a><br />
            <a className='link' href='https://github.com/ekarudianto' rel="noopener noreferrer" target='_blank'>Github</a><br />
            <a className='link' href='https://www.linkedin.com/in/ekarudianto/' rel="noopener noreferrer" target='_blank'>Linkedin</a><br />
            <br />
            For new projects or career opprotunities : <br />
            <a className='link' href='mailto:ekarudianto89@gmail.com'>ekarudianto89@gmail.com</a><br />
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
