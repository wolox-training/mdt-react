import React from 'react';
import PropTypes from 'prop-types';

import Board from '../../components/Board';

import './styles.css';

export default function GameLayout({ moves, onClick, status, squares }) {
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

GameLayout.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  status: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string)
};
