import React, { Component } from 'react';

import Square from '../Square';

import './styles.css';

class Board extends Component {
  // eslint-disable-next-line no-unused-vars
  renderSquare = i => <Square value={i} />;

  render() {
    const status = 'Next player: X';

    return (
      <React.Fragment>
        <div className={status}>{status}</div>
        <div className={'board-row'}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={'board-row'}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={'board-row'}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
