import api from '../config/api';

const apiURL = process.env.REACT_APP_API_BASE_URL;

export default {
  getBookDetail: id => api.get(`${apiURL}/books`, { id })
};
