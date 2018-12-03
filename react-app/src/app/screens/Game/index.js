import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../../redux/Game/actions';
import ListItem from '../../components/ListItem';
import Topbar from '../../components/Topbar';

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
    const { history, squares, status, email } = this.props;
    return (
      <Fragment>
        <Topbar email={email} />
        <GameLayout
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
  isWinner: PropTypes.bool,
  email: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
  history: store.game.history,
  squares: getSquares(store),
  status: store.game.status,
  stepNumber: store.game.stepNumber,
  xIsNext: store.game.xIsNext,
  email: store.login.email
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
