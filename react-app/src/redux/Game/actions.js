import { calculateWinner } from '../../app/screens/Game/utils';

export const actionTypes = {
  MAKE_MOVE: 'MAKE_MOVE',
  JUMP_TO: 'JUMP_TO',
  GET_STATUS: 'GET_STATUS',
  CALCULATE_WINNER: 'CALCULATE_WINNER'
};

const ActionCreators = {
  makeMove(i) {
    return (dispatch, getState) => {
      const { stepNumber, history, xIsNext } = getState().game;
      const hist = history.slice(0, stepNumber + 1);
      const current = hist[hist.length - 1];
      const squares = current.squares.slice();
      squares[i] = xIsNext ? 'X' : 'O';
      dispatch({
        type: actionTypes.MAKE_MOVE,
        payload: {
          history: hist.concat([{ squares }]),
          stepNumber: hist.length,
          xIsNext: !xIsNext
        }
      });
      dispatch(ActionCreators.getStatus(squares, !xIsNext));
    };
  },
  jumpTo(step) {
    return dispatch =>
      dispatch({
        type: actionTypes.JUMP_TO,
        payload: {
          stepNumber: step,
          xIsNext: step % 2 === 0,
          isWinner: false
        }
      });
  },
  getStatus(squares, xIsNext) {
    return dispatch => {
      const winner = calculateWinner(squares);
      dispatch({
        type: actionTypes.GET_STATUS,
        payload: {
          status: winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`,
          isWinner: winner
        }
      });
    };
  }
};

export default ActionCreators;
