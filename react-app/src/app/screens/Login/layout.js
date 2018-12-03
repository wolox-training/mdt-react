import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength, validateEmail } from '../Login/components/CustomInput/utils';
import { FORM } from '../../../utils/constants';

import CustomInput from './components/CustomInput';
import './components/CustomInput/styles.css';

function Form({ handleSubmit }) {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Field
        name={FORM.EMAIL}
        component={CustomInput}
        type={FORM.TEXT}
        label={FORM.EMAIL}
        validate={[required, validateEmail]}
      />
      <Field
        name={FORM.PASSWORD}
        component={CustomInput}
        type={FORM.PASSWORD}
        label={FORM.PASSWORD}
        validate={[required, minLength]}
      />
      <button className="button" type={FORM.SUBMIT}>
        {FORM.SUBMIT}
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: FORM.LOGIN
})(Form);
