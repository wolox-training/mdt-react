const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  stepNumber: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MAKE_MOVE':
      return {
        ...state,
        history: action.payload.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };
    case 'JUMP_TO':
      return { ...state, stepNumber: action.payload.stepNumber, xIsNext: action.payload.xIsNext };
    default:
      return state;
  }
}
