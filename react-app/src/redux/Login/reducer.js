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
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: action.payload.isLogged
      };
    case 'LOGIN_FAILURE':
      return {
        ...state
      };
    default:
      return state;
  }
}
