import axios from 'axios';

const KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';
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

export async function getBaseURLPath() {
  const config = await fetchSeachRequest(searchInstanceConfig);

  const posterBaseImageSRC =
    config.data.images.secure_base_url + config.data.images.poster_sizes[3];

  return posterBaseImageSRC;
}
