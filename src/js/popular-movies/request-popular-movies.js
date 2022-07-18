import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';

export async function requestPopularMovies(page) {
  return await axios(`3/trending/all/day?api_key=${API_KEY}&page=${page}`);
}
