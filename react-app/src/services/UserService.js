import api from '../config/api';

export default {
  getUsers: () => api.get('/users')
};
