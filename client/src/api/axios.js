import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:4000/api',
    baseURL: 'https://mern-crud-auth.onrender.com/',
    withCredentials: true,
});

export default instance;