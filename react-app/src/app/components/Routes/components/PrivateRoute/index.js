import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props => (localStorage.getItem('email') ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
