import About from '@/components/About';
import Email from '@/components/Email';
import Links from '@/components/Links';
import ProjectsLink from '@/components/Projects/ProjectsLink';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='site'>
        <Email />
        <About />
        <Links />
        <ProjectsLink />
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
};

export default Home;
