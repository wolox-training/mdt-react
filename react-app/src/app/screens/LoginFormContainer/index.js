import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ActionCreators from '../../../redux/Login/actions';

import LoginForm from './components/LoginForm';

class LoginFormContainer extends Component {
  submit = values => this.props.submit(values);

  render() {
    return this.props.isLogged ? <Redirect to="/" /> : <LoginForm onSubmit={this.submit} />;
  }
}

LoginFormContainer.propTypes = {
  submit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool
};

const mapStateToProps = store => ({
  isLogged: store.login.isLogged
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(ActionCreators.getUsers()),
  submit: values => dispatch(ActionCreators.submit(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
