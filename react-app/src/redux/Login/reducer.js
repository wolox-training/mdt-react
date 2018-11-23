const initialState = {
  currentUser: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state };
    case 'GET_USERS_FAILURE':
      return {
        ...state,
        error: action.payload.error
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload.currentUser
      };
    case 'NOTIFY_INVALID_USER':
      return {
        ...state
      };
    default:
      return state;
  }
}
