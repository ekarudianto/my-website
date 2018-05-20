import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Particles from 'particlesjs';
import './Connect.scss';

class Connect extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Particles.init({
      selector: '.background',
      connectParticles: true,
      color: ['#004F8B', '#003D6B', '#A9DAFF'],
      maxParticles: 200,
      sizeVariations: 5,
      minDistance: 90,
    });
  }

  render() {
    return (
      <div className='site__col site__col--connect'>
        <canvas className="background"></canvas>
      </div>
    );
  }
}

Connect.propTypes = {
  name: PropTypes.string,
};

export default Connect;
