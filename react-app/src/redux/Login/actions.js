/* eslint-disable no-alert */
import UserService from '../../services/UserService';

const ActionCreators = {
  submit(values) {
    return async dispatch => {
      dispatch({ type: 'GET_USERS' });

      const response = await UserService.getUsers();
      if (response.ok) {
        const currentUser = response.data.find(
          user => user.email === values.email && user.password === values.password
        );

        if (currentUser) {
          localStorage.setItem('email', currentUser.email);

          dispatch({
            type: 'SET_CURRENT_USER',
            payload: {
              currentUser
            }
          });
        } else {
          alert('Invalid user or password.');
          dispatch({ type: 'NOTIFY_INVALID_USER' });
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
