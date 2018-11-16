import calculateWinner from '../../app/screens/Game/utils';

const ActionCreators = {
  makeMove(i) {
    return (dispatch, getState) => {
      const { stepNumber, history, xIsNext } = getState().game;
      const hist = history.slice(0, stepNumber + 1);
      const current = hist[hist.length - 1];
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = xIsNext ? 'X' : 'O';

      dispatch({
        type: 'MAKE_MOVE',
        payload: {
          history: hist.concat([{ squares }]),
          stepNumber: hist.length,
          xIsNext: !xIsNext
        }
      });
    };
  },
  jumpTo(step) {
    return dispatch =>
      dispatch({
        type: 'JUMP_TO',
        payload: {
          stepNumber: step,
          xIsNext: step % 2 === 0
        }
      });
  }
};

export default ActionCreators;
