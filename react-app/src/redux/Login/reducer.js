import { actions } from './actions';

const initialState = {
  isLogged: false,
  email: null,
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      return { ...state, isLoading: action.payload.isLoading };
    case actions.GET_USERS_SUCCESS:
      return { ...state, isLoading: action.payload.isLoading };
    case actions.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        isLogged: action.payload.isLogged
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state
      };
    case actions.LOG_OUT:
      return {
        ...state,
        email: action.payload.email,
        isLogged: action.payload.isLogged
      };
    case actions.GET_USER:
      return {
        ...state,
        email: action.payload.email,
        isLogged: action.payload.isLogged
      };
    default:
      return state;
  }
}
