import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getStorageItem } from '../../../../../utils';
import Game from '../../../../screens/Game';

// TODO: reemplazar el localStorage por el isLogged.... para eso tengo que dispatchear una action en el componentDidMount del login.
const validateLogin = () => (getStorageItem('email') ? <Game /> : <Redirect to="/login" />);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route exact {...rest} render={() => validateLogin()} />
);

export default PrivateRoute;
