import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://senderocornizuelo.xyz/api-rest/public/api/',
     baseURL: 'http://127.0.0.1:8000/api/',
});

api.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        return config;
        }
    );


export default api;