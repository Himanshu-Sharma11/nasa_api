import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

let myAxios = axios.create({
  baseURL: `https://api.nasa.gov/planetary`,
});

export const FETCH_NASA = (newDate) => {
  return myAxios.get(`/apod?api_key=${process.env.api_Key}&date=${newDate}`);
};
