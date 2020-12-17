import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.MIX_BASEURL,
  // baseURL: 'http://54.248.231.20',
  headers: {
    'Content-Type': 'application/json',
  },
})