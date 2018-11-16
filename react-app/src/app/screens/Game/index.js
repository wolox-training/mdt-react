import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../../redux/Game/action';

import { Layout, ListItem } from './layout';
import calculateWinner from './utils';

import './styles.css';

class Game extends Component {
  static propTypes = {
    history: PropTypes.Array,
    stepNumber: PropTypes.number,
    xIsNext: PropTypes.bool,
    makeMove: PropTypes.func.isRequired,
    jumpTo: PropTypes.func.isRequired
  };

  handleClick = i => this.props.makeMove(i);

  jumpTo = step => this.props.jumpTo(step);

  render() {
    const history = this.props.history;
    // debugger; //eslint-disable-line
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return <ListItem key={step.toString()} desc={desc} onClick={() => this.jumpTo(move)} />;
    });
    return (
      <Layout moves={moves} squares={current.squares} status={status} onClick={i => this.handleClick(i)} />
    );
  }
}

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext
  /* moves: state.moves,
  squares: state.squares */
});

const mapDispatchToProps = dispatch => ({
  jumpTo: body => dispatch(ActionCreators.jumpTo(body)),
  makeMove: body => dispatch(ActionCreators.makeMove(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
