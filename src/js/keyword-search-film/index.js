import { getFilm } from './getFilm';
import { standartindArrayFilms } from './standart-array-films';
import { renderCards } from './render-cards';
import { refs } from './refs-el';
import { spinnerOn, spinnerOff } from '../spinner-js/spinner';
import { setResultData, clearResultData } from '../popular-movies/data-result';
import { renderPaginationSearch } from './pagin-search';

refs.form.addEventListener('submit', onSearchFilmSubmitForm);

async function onSearchFilmSubmitForm(e) {
  e.preventDefault();

  refs.input.addEventListener('input', onChangeInput);

  let inputValue = e.currentTarget.elements.searchQuery.value;

  if (inputValue === '') {
    addAlert();
    return;
  }

  spinnerOn();

  const { arrayFilms, totalPages } = await getFilm(inputValue, 1);

  spinnerOff();

  if (arrayFilms.length === 0) {
    addAlert();
    refs.paginationList.innerHTML = '';
    return;
  }
  clearResultData();
  setResultData(arrayFilms);

  const validFilmsArray = standartindArrayFilms(arrayFilms);

  renderCards(validFilmsArray);

  refs.paginationList.innerHTML = '';

  renderPaginationSearch(1, totalPages);
}

function addAlert() {
  refs.text.textContent =
    'Search result not successful. Enter the correct movie name and';
}

function onChangeInput(e) {
  refs.text.textContent = '';
}
