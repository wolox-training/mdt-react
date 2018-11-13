/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Square = props => (
  <button className={'square'} onClick={props.onClick}>
    {props.value}
  </button>
);

Square.PropTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
