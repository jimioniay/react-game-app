import axios from 'axios';

const baseURL = process.env === 'production'? 'https://facebook.com' : 'http://localhost:2370';

const instance = axios.create({
    baseURL
});

export default instance;
