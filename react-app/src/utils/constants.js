export const ACTIONS = {
  LOGIN: {
    GET_USERS_FAILURE: 'GET_USERS_FAILURE',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE'
  }
};

export const FORM = {
  EMAIL: 'email',
  PASSWORD: 'password',
  SUBMIT: 'submit',
  TEXT: 'text',
  LOGIN: 'login'
};

export const MESSAGES = {
  VALUE_IS_REQUIRED: 'Value is required',
  VALUE_IS_TOO_SHORT: 'Value must be at least 8 characters',
  INVALID_EMAIL: 'Invalid email.  Example of valid email: "manutuero@gmail.com"',
  INVALID_USER_OR_PASS: 'Invalid user or password.',
  SERVER_ERROR: 'A server error has occurred'
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login'
};

export const VALIDITY = {
  VALID: 'valid',
  INVALID: 'invalid'
};
