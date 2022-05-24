import axios from 'axios';

const request = axios.create({
  baseURL: 'https://todoo.5xcamp.us',
});
const token = document.cookie.replace(/(?:(?:^|.*;\s*)toDoToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
request.defaults.headers.common.Authorization = token;

export default request;
