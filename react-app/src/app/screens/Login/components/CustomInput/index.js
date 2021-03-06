import React from 'react';
import cx from 'classnames';

import { VALIDITY } from '../../../../../utils/constants';

const getValidityClassName = meta => {
  if (meta.active) return;
  if (meta.touched && meta.invalid) return VALIDITY.INVALID;
  if (meta.touched && meta.valid) return VALIDITY.VALID;
};

function CustomInput({ label, input, type, meta }) {
  return (
    <div className={cx('custom-input-container', { dirty: meta.dirty }, getValidityClassName(meta))}>
      <input autoComplete="new-password" {...input} type={type} className="input" />
      <label className="label">{label}</label>
      {meta.error && meta.touched && <div className="error-text">{meta.error}</div>}
    </div>
  );
}

export default CustomInput;
