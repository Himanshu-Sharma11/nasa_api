import axios from 'axios';

let headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};
const URL = axios.create({
  baseURL: 'http://localhost:5000',
  headers: headers,
});

export const FETCH_DATA = (date) => URL.get(`/${date}`);
