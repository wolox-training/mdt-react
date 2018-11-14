/* eslint-disable react/prop-types */
import React from 'react';

import Board from '../../components/Board';

import './styles.css';

// eslint-disable-next-line react/prop-types
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
