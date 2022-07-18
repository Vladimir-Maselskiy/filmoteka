import axios from 'axios';
import { spinnerOff, spinnerOn } from '../spinner-js/spinner';
import { getAdaptiveDataForRender } from './getAdaptiveDataForRender';

const KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';
const BASE_URL = `https://api.themoviedb.org/3/movie/`;
const BASE_URL_CONFIG = 'https://api.themoviedb.org/3/configuration';

const options = {
  params: {
    api_key: KEY,
  },
};

const config1 = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  },
};

const searchInstanceConfig = axios.create({
  baseURL: BASE_URL_CONFIG,
  https: config1,
});

async function fetchSeachRequest(searchInstance) {
  return await searchInstance.get('', options);
}

export async function getModalData(id) {
  const searchInstance = axios.create({
    baseURL: BASE_URL + id,
    https: config1,
  });

  const movie = await fetchSeachRequest(searchInstance);

  return getAdaptiveDataForRender(movie.data);
}
