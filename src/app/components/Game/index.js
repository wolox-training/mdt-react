import React, { Component } from 'react';

import Board from '../Board';

import './styles.css';

class Game extends Component {
  render() {
    return (
      <div className={'game'}>
        <div className={'game-info'}>
          <Board />
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
