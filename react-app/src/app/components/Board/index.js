import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import './styles.css';

class Board extends Component {
  static propTypes = {
    squares: PropTypes.Array,
    onClick: PropTypes.func
  };

  renderSquare = i => <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;

  render() {
    return (
      <Fragment>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

export default Board;