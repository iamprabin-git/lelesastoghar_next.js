<<<<<<< HEAD
import axios from 'axios';
import config from '@/config';
import api from './api';

export async function login({ email, password }) {
  return await api.post(`${config.apiUrl}/api/auth/login`, { email, password, });
}

export async function registerUser(data) {
  return await api.post(`${config.apiUrl}/api/auth/register`, data);
}
=======
import axios from 'axios';
import config from '@/config';
import api from './api';

export async function login({ email, password }) {
  return await api.post(`${config.apiUrl}/api/auth/login`, { email, password, });
}

export async function registerUser(data) {
  return await api.post(`${config.apiUrl}/api/auth/register`, data);
}
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
