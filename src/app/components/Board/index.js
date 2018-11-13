import React, { Component } from 'react';

import Square from '../Square';

import './styles.css';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares, // shorthand
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare = i => <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;

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
