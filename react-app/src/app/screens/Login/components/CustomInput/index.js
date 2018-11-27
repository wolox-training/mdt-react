import React from 'react';
import cx from 'classnames';

const getValidityClassName = meta => {
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

function CustomInput(props) {
  const { label, input, type, meta } = props;
  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input autoComplete="new-password" {...input} type={type} className="input" />
      <label className="label">{label}</label>
      {meta.error && meta.touched && <div className="error-text">{meta.error}</div>}
    </div>
  );
}

export default CustomInput;
