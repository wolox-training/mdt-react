import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../../redux/Login/actions';

import Form from './layout';

class Login extends Component {
  submit = values => this.props.submit(values);

  render() {
    return <Form onSubmit={this.submit} />;
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired
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
)(Login);
