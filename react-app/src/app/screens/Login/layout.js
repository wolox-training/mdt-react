import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength, validateEmail } from '../Login/components/CustomInput/utils';
import constants from '../../../utils/constants';

import CustomInput from './components/CustomInput';
import './components/CustomInput/styles.css';

function Form({ handleSubmit }) {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Field
        name={constants.form.EMAIL}
        component={CustomInput}
        type={constants.form.TEXT}
        label={constants.form.EMAIL}
        validate={[required, validateEmail]}
      />
      <Field
        name={constants.form.PASSWORD}
        component={CustomInput}
        type={constants.form.PASSWORD}
        label={constants.form.PASSWORD}
        validate={[required, minLength]}
      />
      <button className="button" type={constants.form.SUBMIT}>
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
