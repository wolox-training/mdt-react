/* eslint-disable react/prop-types */
import React from 'react';

import Board from '../Board';

import './styles.css';

// eslint-disable-next-line react/prop-types
export function ListItem({ move, desc, jumpTo }) {
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{desc}</button>
    </li>
  );
}

export function Layout({ moves, onClick, status, squares }) {
  return (
    <div className={'game'}>
      <div className={'game-info'}>
        <Board squares={squares} onClick={i => onClick(i)} />
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
