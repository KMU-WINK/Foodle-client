import axios from "axios";

const baseURL = new URL('http://15.164.0.82:8000/');

export const baseService = axios.create({
    baseURL: baseURL.toString(),
    'Content-Type': 'application/json',
    withCredentials: true,
    
})

export default baseService;