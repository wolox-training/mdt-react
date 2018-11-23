import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Game from '../../screens/Game';
import Login from '../../screens/LoginFormContainer';

const routes = {
  HOME: '/',
  LOGIN: '/login'
};

const validateLogin = () => (localStorage.getItem('email') ? <Game /> : <Redirect to={routes.LOGIN} />);

export default function Routes() {
  return (
    <Router>
      <Fragment>
        <PrivateRoute path={Routes.HOME} />
        <Route path={routes.LOGIN} component={Login} />
      </Fragment>
    </Router>
  );
}

const PrivateRoute = ({ path }) => <Route exact path={path} render={() => validateLogin()} />;

PrivateRoute.propTypes = {
  path: PropTypes.string
};
