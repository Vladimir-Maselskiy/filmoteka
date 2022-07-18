import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getResultData } from '../popular-movies/data-result';

const STORAGE_KEY_WATCHED = 'watched-films';
const STORAGE_KEY_QUEUE = 'queue-films';
const result = getResultData();

let filmsWatched = [];
let filmsQueue = [];

if (localStorage.getItem(STORAGE_KEY_WATCHED) != null) {
  filmsWatched = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
}

if (localStorage.getItem(STORAGE_KEY_QUEUE) != null) {
  filmsQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
}

Notify.init({
  width: '350px',
  position: 'center-top',
  timeout: 1000,
  success: {
    background: '#ff6b01',
  },
  info: {
    background: '#eb150c',
  },
});

export function onBtnWatchedClick() {
  const filmId = document.querySelector('.modal').getAttribute('data-movie-id');
  const currentFilm = result.find(el => el.id === Number(filmId));

  if (filmsWatched.every(el => el.id !== Number(filmId))) {
    filmsWatched.push(currentFilm);
    Notify.success('The movie has been added to the list of watched.');
  } else {
    Notify.info('The movie has already been added to watched.');
  }

  localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(filmsWatched));
}

export function onBtnQueueClick() {
  const filmId = document.querySelector('.modal').getAttribute('data-movie-id');
  const currentFilm = result.find(el => el.id === Number(filmId));

  if (filmsQueue.every(el => el.id !== Number(filmId))) {
    Notify.success('The movie has been added to the list of queue.');
    filmsQueue.push(currentFilm);
  } else {
    Notify.info('The movie has already been added to queue.');
  }

  localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(filmsQueue));
}
