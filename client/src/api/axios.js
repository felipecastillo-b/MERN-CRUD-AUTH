import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:4000/api',
    //baseURL: 'https://mern-crud-auth.onrender.com/',
    baseURL: 'https://awful-cow-jacket.cyclic.app/api',
    withCredentials: true,
});

export default instance;