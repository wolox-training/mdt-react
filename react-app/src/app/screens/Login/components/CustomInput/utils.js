import { MESSAGES } from '../../../../../utils/constants';

export const required = value => !value && MESSAGES.VALUE_IS_REQUIRED;

export const minLength = value => value.length < 8 && MESSAGES.VALUE_IS_TOO_SHORT;

export const validateEmail = email => {
  const er = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !er.test(String(email).toLowerCase()) && MESSAGES.INVALID_EMAIL;
};
