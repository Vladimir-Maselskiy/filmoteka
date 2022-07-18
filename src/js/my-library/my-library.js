import libraryPagination from './library-pagination';
import getPartOfFilms from './get-part-of-films';
import createMarkup from './create-library-markup';
import { setCurrentFilmsData } from './current-films-data';

const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');
const galleryList = document.querySelector('.gallery-list');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');
const paginationList = document.querySelector('.pagination');
let currentPage = 1;

queueBtn.addEventListener('click', showFilms);
watchedBtn.addEventListener('click', showFilms);
document.addEventListener('DOMContentLoaded', showFilms);


function showFilms(e) {
  const currentSection = document.querySelector(
    'button[data-current="currentPage"]'
  );
  const localStorageKey = currentSection.dataset.key;
  const filmsArrayJson = localStorage.getItem(localStorageKey);
  const filmsArrayAll = JSON.parse(filmsArrayJson);

  if (!filmsArrayAll) {
    galleryList.innerHTML = '';
    paginationList.style.display = 'none';
    return;
  }

  const partOfFilms = getPartOfFilms(filmsArrayAll, currentPage);
  const totalPage = Math.ceil(filmsArrayAll.length / 20);

  paginationList.style.display = 'none';
  if (Number(filmsArrayAll.length) > 20) {
    paginationList.style.display = 'flex';
    libraryPagination(currentPage, totalPage);
  }

  galleryList.innerHTML = createMarkup(partOfFilms);
  setCurrentFilmsData(partOfFilms);
  hidePlaceholder(localStorageKey);
}

export default function hidePlaceholder(key) {
  if (key === `watched-films`) {
    watchedPlaceholder.style.display = 'none';
  } else {
    queuePlaceholder.style.display = 'none';
  }
}
