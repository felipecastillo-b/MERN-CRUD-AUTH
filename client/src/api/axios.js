import axios from "axios";

const instance = axios.create({
    baseURL: ['http://localhost:4000/api', 'https://mern-crud-auth-front.onrender.com'],
    withCredentials: true,
});

export default instance;