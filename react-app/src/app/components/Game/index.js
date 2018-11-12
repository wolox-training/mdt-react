import React, { Component } from 'react';

import styles from './styles.css';

class Game extends Component {
  render() {
    return (
      <div className={styles.game}>
        <div className={styles.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
