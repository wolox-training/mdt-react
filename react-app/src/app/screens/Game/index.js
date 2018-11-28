import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../../redux/Game/actions';
import ListItem from '../../components/ListItem';
import Topbar from '../../components/Topbar';

import { Layout } from './layout';
import calculateWinner from './utils';

import './styles.css';

class Game extends Component {
  handleClick = i => this.props.makeMove(i);

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
      <Fragment>
        <Topbar email={this.props.email} />
        <Layout
          moves={this.renderMoves(history)}
          squares={squares}
          status={status}
          onClick={i => this.handleClick(i)}
        />
      </Fragment>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  squares: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
  makeMove: PropTypes.func.isRequired,
  jumpTo: PropTypes.func.isRequired,
  email: PropTypes.string
};

const getSquares = state => {
  const current = state.game.history[state.game.stepNumber];
  return current.squares;
};

const getStatus = state => {
  const squares = getSquares(state);
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${state.game.xIsNext ? 'X' : 'O'}`;
  }

  return status;
};

const mapStateToProps = store => ({
  history: store.game.history,
  squares: getSquares(store),
  status: getStatus(store),
  stepNumber: store.game.stepNumber,
  xIsNext: store.game.xIsNext,
  email: store.login.email
});

const mapDispatchToProps = dispatch => ({
  jumpTo: body => dispatch(ActionCreators.jumpTo(body)),
  makeMove: body => dispatch(ActionCreators.makeMove(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
