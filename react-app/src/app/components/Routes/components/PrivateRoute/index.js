/* eslint-disable react/display-name */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FORM, ROUTES } from '../../../../../utils/constants';
import { getStorageItem } from '../../../../../utils/localStorageUtils';

const validateUser = Component => () =>
  getStorageItem(FORM.EMAIL) ? <Component /> : <Redirect to={ROUTES.LOGIN} />;

function PrivateRoute({ path, component }) {
  return <Route exact path={path} render={validateUser(component)} />;
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired
};

export default PrivateRoute;
