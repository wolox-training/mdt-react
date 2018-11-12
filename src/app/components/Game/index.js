import React, { Component } from 'react';

import Board from '../Board';

import styles from './styles.css';

class Game extends Component {
  render() {
    return (
      <div className={styles.game}>
        <div className={styles.gameInfo}>
          <Board />
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
