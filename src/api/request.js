import axios from 'axios';

const request = axios.create({
  baseUrl: 'https://todoo.5xcamp.us',
});

export default request;
