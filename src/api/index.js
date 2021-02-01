import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:7000' });

export const fetchPosts = () => API.get(`/posts`);
export const createPosts = (newPost) => API.post(`/posts`, newPost);
export const likePosts = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePosts = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePosts = (id) => API.delete(`/posts/${id}`);

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});
export const signin = (FormData) => API.post(`/user/signin`, FormData);
export const signup = (FormData) => API.post(`/user/signup`, FormData);

