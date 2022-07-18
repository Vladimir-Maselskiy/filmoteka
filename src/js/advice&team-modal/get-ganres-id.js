import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';

export default async function searchFilmByGanre() {
  return await axios(`3/genre/movie/list?api_key=${API_KEY}`);
}
