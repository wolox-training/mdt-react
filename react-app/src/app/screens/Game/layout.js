import React from 'react';
import PropTypes from 'prop-types';

import Board from '../../components/Board';

import './styles.css';

export function Layout({ moves, onClick, status, squares }) {
  return (
    <div className="game">
      <div className="game-info">
        <Board squares={squares} onClick={onClick} />
        <div>{status}</div>
        <div className="moves">{moves}</div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  moves: PropTypes.Array,
  onClick: PropTypes.func,
  status: PropTypes.string,
  squares: PropTypes.Array
};
