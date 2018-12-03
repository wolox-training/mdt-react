import { ACTIONS } from '../../utils/constants';

const initialState = {
  isLogged: false,
  email: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOGIN.GET_USERS_FAILURE:
    case ACTIONS.LOGIN.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: action.payload.isLogged
      };
    case ACTIONS.LOGIN.LOGIN_FAILURE:
      return state;
    default:
      return state;
  }
}
