import React, { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { history } from '../../../redux/store';
import Game from '../../screens/Game';
import Login from '../../screens/Login';

import PrivateRoute from './components/PrivateRoute';

const routes = {
  HOME: '/',
  LOGIN: '/login',
  EMPTY: '/empty'
};

function Routes() {
  return (
    <Router history={history}>
      <Fragment>
        <PrivateRoute path={routes.HOME} component={Game} />
        <Route path={routes.EMPTY} render={() => <h3>Empty view for the next trello card.</h3>} />
        <Route path={routes.LOGIN} component={Login} />
      </Fragment>
    </Router>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string
};

export default Routes;
