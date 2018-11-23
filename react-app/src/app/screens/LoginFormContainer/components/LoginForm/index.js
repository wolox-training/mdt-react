import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength } from '../../validation';

import { customInput } from './fields';
import './fields/LoginForm.css';

const LoginForm = ({ handleSubmit }) => (
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
