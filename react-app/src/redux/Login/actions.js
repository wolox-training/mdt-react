/* eslint-disable no-alert */
import { push } from 'react-router-redux';

import constants from '../../utils/constants';
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
          setStorageItem(constants.form.EMAIL, values.email);
          dispatch({
            type: constants.actions.login.LOGIN_SUCCESS,
            payload: {
              isLogged
            }
          });
          dispatch(push(constants.routes.HOME));
        } else {
          alert(constants.messages.INVALID_USER_OR_PASS);
          dispatch({ type: constants.actions.login.LOGIN_FAILURE });
        }
      } else {
        alert(`${constants.messages.SERVER_ERROR}: ${response.problem}`);
        dispatch({
          type: constants.actions.login.GET_USERS_FAILURE,
          payload: { error: response.problem }
        });
      }
    };
  }
};

export default ActionCreators;
