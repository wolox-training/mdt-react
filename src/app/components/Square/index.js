/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Square extends Component {
  static PropTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    return (
      <button className={'square'} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
