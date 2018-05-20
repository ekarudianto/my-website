import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
};

export default Home;
