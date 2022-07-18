import { requestPopularMovies } from '../popular-movies/request-popular-movies';
import { createMarkup } from '../popular-movies/create-markup';
import { refs } from '../refs-el/refs-el';
import { setResultData, clearResultData } from '../popular-movies/data-result';
const paginationList = document.querySelector('.pagination');
const cardList = document.querySelector('.gallery-list');

let currentPage = 1;
async function ready(page) {
  try {
    const response = await requestPopularMovies(page);
    const results = await response.data.results;
    const currentPage = response.data.page;
    const totalPage = response.data.total_pages;
    cardList.innerHTML = '';
    refs.galleryListEl.insertAdjacentHTML('afterbegin', createMarkup(results));
    clearResultData();
    setResultData(results);
    renderPagination(currentPage, totalPage);
  } catch (error) {
    refs.galleryListEl.insertAdjacentHTML(
      'afterbegin',
      '<li class="gallery-list__error">No connection to server!!!</li>'
    );
  }
}

export function renderPagination(page, totalPage) {
  currentPage = page;
  let paginationMarkup = '';
  let beforeTwoPage = page - 2;
  let beforePage = page - 1;
  let afterTwoPage = page + 2;
  let afterPage = page + 1;

  if (page > 1) {
    paginationMarkup += `<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>`;
  }
  if (page > 2) {
    paginationMarkup += `<li class="pagination__number display-none">1</li>`;
  }
  if (page > 4) {
    paginationMarkup += `<li class="pagination__number display-none">...</li>`;
  }

  if (page > 3) {
    paginationMarkup += `<li class="pagination__number">${beforeTwoPage}</li>`;
  }

  if (page >= 2) {
    paginationMarkup += `<li class="pagination__number">${beforePage}</li>`;
  }

  paginationMarkup += `<li class="pagination__number active">${page}</li>`;
  if (page < totalPage - 1) {
    paginationMarkup += `<li class="pagination__number">${afterPage}</li>`;
  }
  if (page < totalPage - 2) {
    paginationMarkup += `<li class="pagination__number">${afterTwoPage}</li>`;
  }
  if (page <= totalPage - 1) {
    if (page < totalPage - 3) {
      paginationMarkup += `<li class="pagination__number display-none">...</li>`;
    }
    paginationMarkup += `<li class="pagination__number display-none">${totalPage}</li>`;
  }

  if (page < totalPage) {
    paginationMarkup += `<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>`;
  }

  paginationList.innerHTML = paginationMarkup;

  paginationList.addEventListener('click', onPagination);
}

export function onPagination(e) {
  if (e.target.nodeName !== `LI`) {
    return;
  }
  const target = e.target.textContent;
  window.scrollTo({ top: 240, behavior: 'smooth' });
  switch (target) {
    case '<':
      ready(currentPage - 1);
      break;
    case '>':
      ready(currentPage + 1);
      break;

    case '...':
      break;

    default:
      ready(target);
  }
}
