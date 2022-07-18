import createMarkup from '../my-library/create-library-markup';
import {
  getCurrentFilmsData,
  setCurrentFilmsData,
} from '../my-library/current-films-data';

const libraryListEl = document.querySelector('.gallery-list');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

libraryListEl.addEventListener('click', removeCard);

async function removeCard(e) {
  if (e.target.nodeName !== 'svg') {
    return;
  }
  const filmId = e.target.closest('.remove-film-btn').dataset.filmid;
  const localStorageKey = findLocalStorageKey();
  removeCardFromLocalStorage(filmId, localStorageKey);
  chekLoacalStorageAndShowPlaceholder(localStorageKey);
  const currentFilms = getCurrentFilmsData();
  const newFilmsData = currentFilms.filter(({ id }) => id !== Number(filmId));
  libraryListEl.innerHTML = createMarkup(newFilmsData);
  setCurrentFilmsData(newFilmsData);
}

function findLocalStorageKey() {
  const currentPage = document.querySelector(
    'button[data-current="currentPage"]'
  );
  return currentPage.dataset.key;
}

function removeCardFromLocalStorage(filmIdToRemove, localStorageKey) {
  const filmsIdArray = JSON.parse(localStorage.getItem(localStorageKey));
  const filteredFilmId = filmsIdArray.filter(
    ({ id }) => id !== Number(filmIdToRemove)
  );
  localStorage.setItem(localStorageKey, JSON.stringify(filteredFilmId));
  return filteredFilmId;
}

function chekLoacalStorageAndShowPlaceholder(key) {
  if (JSON.parse(localStorage.getItem(key)).length !== 0) {
    return;
  }

  localStorage.removeItem(key);

  if (key === `watched-films`) {
    watchedPlaceholder.style.display = 'block';
  } else {
    queuePlaceholder.style.display = 'block';
  }
}
