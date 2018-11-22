import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLength, maxLength } from '../../validation';

import { customInput } from './fields';
import './fields/LoginForm.css';

class LoginForm extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { handleSubmit } = this.props;

    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <Field name="email" component={customInput} type="text" label="Email" validate={[required]} />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
