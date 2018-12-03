/* eslint-disable no-alert */
import { push } from 'react-router-redux';

import UserService from '../../services/UserService';
import { getStorageItem, setStorageItem } from '../../utils/localStorageUtils';

export const actions = {
  GET_USERS: '@@login/GET_USERS',
  LOGIN_SUCCESS: '@@login/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@login/LOGIN_FAILURE',
  GET_USERS_SUCCESS: '@@login/GET_USERS_SUCCESS',
  GET_USERS_FAILURE: '@@login/GET_USERS_FAILURE',
  LOG_OUT: '@@login/LOG_OUT',
  GET_USER: '@@login/GET_USER'
};

const ActionCreators = {
  submit(values) {
    return async dispatch => {
      dispatch({
        type: actions.GET_USERS,
        payload: {
          isLoading: true
        }
      });
      const response = await UserService.getUsers();
      if (response.ok) {
        dispatch({
          type: actions.GET_USERS_SUCCESS,
          payload: {
            isLoading: false
          }
        });
        const isLogged = response.data.some(
          user => user.email === values.email && user.password === values.password
        );
        if (isLogged) {
          setStorageItem('email', values.email);
          dispatch({
            type: actions.LOGIN_SUCCESS,
            payload: {
              email: values.email,
              isLogged
            }
          });
          dispatch(push('/'));
        } else {
          alert('Invalid user or password.');
          dispatch({ type: actions.LOGIN_FAILURE });
        }
      } else {
        alert(`A server error has occurred: ${response.problem}`);
        dispatch({
          type: actions.GET_USERS_FAILURE,
          payload: { error: response.problem }
        });
      }
    };
  },
  handleLogout() {
    return dispatch => {
      setStorageItem('email', '');
      dispatch(push('/login'));
      dispatch({
        type: actions.LOG_OUT,
        payload: {
          isLogged: false
        }
      });
    };
  },
  getUser() {
    return dispatch => {
      const email = getStorageItem('email');
      if (email) {
        dispatch({
          type: actions.GET_USER,
          payload: {
            email,
            isLogged: true
          }
        });

        dispatch(push('/'));
      }
    };
  }
};

export default ActionCreators;
