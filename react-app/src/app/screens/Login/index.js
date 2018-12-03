import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../../redux/Login/actions';
import { withLoading } from '../../hocs';

import Form from './layout';

class Login extends Component {
  submit = values => this.props.submit(values);

  render() {
    const FormWithLoading = withLoading(Form);
    return <FormWithLoading isLoading={this.props.isLoading} onSubmit={this.submit} />;
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = store => ({
  isLogged: store.login.isLogged,
  isLoading: store.login.isLoading
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(ActionCreators.getUsers()),
  submit: values => dispatch(ActionCreators.submit(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
