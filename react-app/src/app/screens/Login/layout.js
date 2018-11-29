import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength, validateEmail } from './components/CustomInput/utils';
import CustomInput from './components/CustomInput';
import './components/CustomInput/styles.css';

function Form({ handleSubmit }) {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Field
        name="email"
        component={CustomInput}
        type="text"
        label="Email"
        validate={[required, validateEmail]}
      />
      <Field
        name="password"
        component={CustomInput}
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

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Form);
