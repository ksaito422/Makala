import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.MIX_BASEURL,
  // baseURL: 'http://54.95.50.84',
  headers: {
    'Content-Type': 'application/json',
  },
})