const initialState = {
  isLogged: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOG_OUT':
      return {
        ...state
      };
    default:
      return state;
  }
}

export default reducer;
