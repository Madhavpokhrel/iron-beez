import axios from 'axios';

const API = axios.create({baseURL: 'api'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const signIn = (formData) => API.post('/sign-in', formData);
export const signUp = (formData) => API.post('/sign-up', formData);