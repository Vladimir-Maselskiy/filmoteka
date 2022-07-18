import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';

export async function requestIds(id) {
  return await axios(`3/movie/${id}?api_key=${API_KEY}`);
}
