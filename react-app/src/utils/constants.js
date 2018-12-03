const constants = {
  actions: {
    login: {
      GET_USERS_FAILURE: 'GET_USERS_FAILURE',
      LOGIN_SUCCESS: 'LOGIN_SUCCESS',
      LOGIN_FAILURE: 'LOGIN_FAILURE'
    }
  },
  form: {
    EMAIL: 'email',
    PASSWORD: 'password',
    SUBMIT: 'submit',
    TEXT: 'text'
  },
  messages: {
    VALUE_IS_REQUIRED: 'Value is required',
    VALUE_IS_TOO_SHORT: 'Value must be at least 8 characters',
    INVALID_EMAIL: 'Invalid email.  Example of valid email: "manutuero@gmail.com"',
    INVALID_USER_OR_PASS: 'Invalid user or password.',
    SERVER_ERROR: 'A server error has occurred'
  },
  routes: {
    HOME: '/',
    LOGIN: '/login'
  },
  validity: {
    VALID: 'valid',
    INVALID: 'invalid'
  }
};

export default constants;
