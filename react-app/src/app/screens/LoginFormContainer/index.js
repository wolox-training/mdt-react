import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

class LoginFormContainer extends Component {
  submit = values => alert(JSON.stringify(values, null, 2));

  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default LoginFormContainer;
