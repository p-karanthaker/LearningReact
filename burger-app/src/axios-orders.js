import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-2b681.firebaseio.com/'
});

export default instance;
