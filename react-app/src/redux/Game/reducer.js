import { actionTypes } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  stepNumber: 0,
  status: 'Next player: X',
  isWinner: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MAKE_MOVE:
      return {
        ...state,
        history: action.payload.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };
    case actionTypes.JUMP_TO:
      return { ...state, stepNumber: action.payload.stepNumber, xIsNext: action.payload.xIsNext };
    case actionTypes.GET_STATUS:
      return { ...state, status: action.payload.status, isWinner: action.payload.isWinner };
    default:
      return state;
  }
}

export default reducer;
