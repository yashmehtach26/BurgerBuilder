import axios from 'axios';

const instance = axios.create({
    baseURL:"https://burger-builder-91ba1.firebaseio.com/"
});

export default instance;