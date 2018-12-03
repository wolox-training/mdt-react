/* eslint-disable no-alert */
import { push } from 'react-router-redux';

import { ACTIONS, FORM, MESSAGES, ROUTES } from '../../utils/constants';
import UserService from '../../services/UserService';
import { setStorageItem } from '../../utils/localStorageUtils';

const ActionCreators = {
  submit(values) {
    return async dispatch => {
      const response = await UserService.getUsers();
      if (response.ok) {
        const isLogged = response.data.some(
          user => user.email === values.email && user.password === values.password
        );
        if (isLogged) {
          setStorageItem(FORM.EMAIL, values.email);
          dispatch({
            type: ACTIONS.LOGIN.LOGIN_SUCCESS,
            payload: {
              isLogged
            }
          });
          dispatch(push(ROUTES.HOME));
        } else {
          alert(MESSAGES.INVALID_USER_OR_PASS);
          dispatch({ type: ACTIONS.LOGIN.LOGIN_FAILURE });
        }
      } else {
        alert(`${MESSAGES.SERVER_ERROR}: ${response.problem}`);
        dispatch({
          type: ACTIONS.LOGIN.GET_USERS_FAILURE,
          payload: { error: response.problem }
        });
      }
    };
  }
};

export default ActionCreators;
