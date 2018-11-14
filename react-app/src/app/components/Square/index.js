/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.PropTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
