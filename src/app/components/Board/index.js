import React, { Component } from 'react';

import Square from '../Square';

import styles from './styles.css';

class Board extends Component {
  // eslint-disable-next-line no-unused-vars
  renderSquare = i => <Square />;

  render() {
    const status = 'Next player: X';

    return (
      <React.Fragment>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
