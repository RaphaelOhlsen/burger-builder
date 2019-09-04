import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://buger-builder-1f784.firebaseio.com/'
});

export default instance;