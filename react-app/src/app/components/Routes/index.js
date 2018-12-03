import React, { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { history } from '../../../redux/store';
import Game from '../../screens/Game';
import Login from '../../screens/Login';
import { ROUTES } from '../../../utils/constants';

import PrivateRoute from './components/PrivateRoute';

function Routes() {
  return (
    <Router history={history}>
      <Fragment>
        <PrivateRoute path={ROUTES.HOME} component={Game} />
        <Route path={ROUTES.LOGIN} component={Login} />
      </Fragment>
    </Router>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string
};

export default Routes;
