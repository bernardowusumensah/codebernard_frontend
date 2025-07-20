import axios from 'axios';

const API_BASE = 'https://expressjsonapi-1.onrender.com/api';
const AUTH_BASE = 'http://localhost:3000/auth';

// Configure axios to include credentials (cookies)
axios.defaults.withCredentials = true;

export const fetchSkills = async () => {
  const res = await axios.get(`${API_BASE}/skills`);
  return res.data;
};

export const fetchProjects = async () => {
  const res = await axios.get(`${API_BASE}/projects`);
  return res.data;
};

export const fetchBlogPosts = async () => {
  const res = await axios.get(`https://dev.to/api/articles?tag=javascript&top=10`);
  return res.data;
};

// Authentication functions
export const login = async (username, password) => {
  const res = await axios.post(`${AUTH_BASE}/login`, { username, password });
  return res.data;
};

export const register = async (username, email, password) => {
  const res = await axios.post(`${AUTH_BASE}/register`, { username, email, password });
  return res.data;
};

export const logout = async () => {
  const res = await axios.post(`${AUTH_BASE}/logout`);
  return res.data;
};

export const getCurrentUser = async () => {
  const res = await axios.get(`${AUTH_BASE}/me`);
  return res.data;
};