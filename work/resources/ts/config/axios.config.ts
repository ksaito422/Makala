import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.MIX_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
})