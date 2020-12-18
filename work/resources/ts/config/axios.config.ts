import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.MIX_APIURL,
  headers: {
    'Content-Type': 'application/json',
  },
})