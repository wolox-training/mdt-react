import constants from '../../utils/constants';

const initialState = {
  isLogged: false,
  email: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.actions.login.GET_USERS_FAILURE:
    case constants.actions.login.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: action.payload.isLogged
      };
    case constants.actions.login.LOGIN_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
