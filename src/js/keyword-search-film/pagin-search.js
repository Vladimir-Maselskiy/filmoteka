import { refs } from './refs-el';
import { getFilm } from './getFilm';
import { standartindArrayFilms } from './standart-array-films';
import { renderCards } from './render-cards';
import { spinnerOn, spinnerOff } from '../spinner-js/spinner';
import { setResultData, clearResultData } from '../popular-movies/data-result';
import { onPagination } from '../pagination/pagination';
import { keywordSearchFilmServise } from './getFilm';

let currentPage = Number(1);

export function renderPaginationSearch(pageNum, totalPage) {
  const page = Number(pageNum);
  const totalPageNum = Number(totalPage);
  currentPage = Number(page);
  let paginationMarkup = '';
  let beforeTwoPage = page - Number(2);
  let beforePage = page - Number(1);
  let afterTwoPage = page + Number(2);
  let afterPage = page + Number(1);

  if (page > 1) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>`;
  }
  if (page > 2) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">1</li>`;
  }
  if (page > 4) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">...</li>`;
  }

  if (page > 3) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${beforeTwoPage}</li>`;
  }

  if (page >= 2) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${beforePage}</li>`;
  }

  paginationMarkup += `<li name="pagin-search-item" class="pagination__number active">${page}</li>`;
  if (page < totalPage - 1) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${afterPage}</li>`;
  }
  if (page < totalPage - 2) {
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number">${afterTwoPage}</li>`;
  }
  if (page <= totalPage - 1) {
    if (page < totalPage - 3) {
      paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">...</li>`;
    }
    paginationMarkup += `<li name="pagin-search-item" class="pagination__number display-none">${totalPageNum}</li>`;
  }

  if (page < totalPage) {
    paginationMarkup += `<li name="pagin-search-item" class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>`;
  }

  refs.paginationList.innerHTML = paginationMarkup;

  refs.paginationList.removeEventListener('click', onPagination);
  refs.paginationList.addEventListener('click', onPaginationSearch);
}

async function onPaginationSearch(e) {
  if (e.target.nodeName !== `LI`) {
    return;
  }

  const target = e.target.textContent;
  window.scrollTo({ top: 240, behavior: 'smooth' });
  switch (target) {
    case '<':
      paginGet(currentPage - 1);
      break;
    case '>':
      paginGet(currentPage + 1);
      break;

    case '...':
      break;

    default:
      paginGet(target);
  }
}

async function paginGet(currentPage) {
  let inputValue = keywordSearchFilmServise.query;

  spinnerOn();

  const { arrayFilms, totalPages } = await getFilm(inputValue, currentPage);

  spinnerOff();

  clearResultData();

  setResultData(arrayFilms);

  const validFilmsArray = standartindArrayFilms(arrayFilms);

  renderCards(validFilmsArray);

  refs.paginationList.innerHTML = '';

  renderPaginationSearch(currentPage, totalPages);
}
