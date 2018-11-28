import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const validateLogin = (Component, isLogged) => (isLogged ? <Component /> : <Redirect to="/login" />);

const PrivateRoute = ({ path, component, isLogged }) => (
  <Route exact path={path} render={() => validateLogin(component, isLogged)} />
);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element,
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = store => ({
  isLogged: store.login.isLogged,
  store
});

export default connect(mapStateToProps)(PrivateRoute);
