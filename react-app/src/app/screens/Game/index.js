import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../../redux/Game/action';
import ListItem from '../../components/ListItem';

import GameLayout from './layout';
import { getSquares } from './utils';

import './styles.css';

class Game extends Component {
  handleClick = i => {
    const { isWinner, squares } = this.props;
    if (!(isWinner || squares[i])) this.props.makeMove(i);
  };

  jumpTo = step => this.props.jumpTo(step);

  renderMoves = history =>
    history.map((step, move) => (
      <ListItem
        key={`ListItem.${step.squares}`}
        desc={move ? `Go to move # ${move}` : `Go to game start`}
        onClick={() => this.jumpTo(move)}
      />
    ));

  render() {
    const { history, squares, status } = this.props;

    return (
      <GameLayout
        moves={this.renderMoves(history)}
        squares={squares}
        status={status}
        onClick={i => this.handleClick(i)}
      />
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  squares: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
  makeMove: PropTypes.func.isRequired,
  jumpTo: PropTypes.func.isRequired,
  isWinner: PropTypes.bool
};

const mapStateToProps = store => ({
  history: store.game.history,
  squares: getSquares(store),
  status: store.game.status,
  stepNumber: store.game.stepNumber,
  xIsNext: store.game.xIsNext,
  isWinner: store.game.isWinner
});

const mapDispatchToProps = dispatch => ({
  jumpTo: stepNumber => dispatch(ActionCreators.jumpTo(stepNumber)),
  makeMove: index => dispatch(ActionCreators.makeMove(index)),
  getStatus: () => dispatch(ActionCreators.getStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
