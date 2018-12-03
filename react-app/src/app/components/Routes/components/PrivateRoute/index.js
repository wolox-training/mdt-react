/* eslint-disable react/display-name */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import constants from '../../../../../utils/constants';
import { getStorageItem } from '../../../../../utils/localStorageUtils';

const validateUser = Component => () =>
  getStorageItem(constants.form.EMAIL) ? <Component /> : <Redirect to={constants.routes.LOGIN} />;

function PrivateRoute({ path, component }) {
  return <Route exact path={path} render={validateUser(component)} />;
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired
};

export default PrivateRoute;
