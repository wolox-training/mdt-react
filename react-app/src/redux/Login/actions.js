/* eslint-disable no-alert */
import UserService from '../../services/UserService';
import { setStorageItem } from '../../utils';

const ActionCreators = {
  submit(values) {
    return async dispatch => {
      dispatch({ type: 'GET_USERS' });
      const response = await UserService.getUsers();
      if (response.ok) {
        const isLogged = response.data.some(
          user => user.email === values.email && user.password === values.password
        );
        if (isLogged) {
          setStorageItem('email', values.email);
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              isLogged
            }
          });
        } else {
          alert('Invalid user or password.');
          dispatch({ type: 'LOGIN_FAILURE' });
        }
      } else {
        alert(`A server error has occurred: ${response.problem}`);
        dispatch({
          type: 'GET_USERS_FAILURE',
          payload: { error: response.problem }
        });
      }
    };
  }
};

export default ActionCreators;
