import React from 'react';
import PropTypes from 'prop-types';

import Board from '../../components/Board';

import './styles.css';

export function ListItem({ idx, desc, onClick }) {
  return (
    <li key={idx}>
      <button onClick={onClick}>{desc}</button>
    </li>
  );
}

export function Layout({ moves, onClick, status, squares }) {
  return (
    <div className="game">
      <div className="game-info">
        <Board squares={squares} onClick={onClick} />
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  idx: PropTypes.number,
  desc: PropTypes.string,
  onClick: PropTypes.func
};

Layout.propTypes = {
  moves: PropTypes.Array,
  onClick: PropTypes.func,
  status: PropTypes.string,
  squares: PropTypes.Array
};