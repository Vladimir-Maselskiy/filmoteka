import getPartOfFilms from './get-part-of-films';
import hidePlaceholder from './my-library';
import createMarkup from './create-library-markup';
import { setCurrentFilmsData } from './current-films-data';

const paginationList = document.querySelector('.pagination');
const galleryList = document.querySelector('.gallery-list');

let currentPage = Number(1);

export default function renderPagination(pageNum, totalPage) {
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

  paginationList.innerHTML = paginationMarkup;
  paginationList.addEventListener('click', paginationNext);
}

function paginationNext(e) {
  if (e.target.nodeName !== `LI`) {
    return;
  }

  const target = e.target.textContent;
  window.scrollTo({ top: 240, behavior: 'smooth' });
  switch (target) {
    case '←':
      showFilms(currentPage - 1);
      break;
    case '→':
      showFilms(currentPage + 1);
      break;

    case '...':
      break;

    default:
      showFilms(Number(target));
  }
}

function showFilms(page) {
  const currentSection = document.querySelector(
    'button[data-current="currentPage"]'
  );
  const localStorageKey = currentSection.dataset.key;
  const filmsArrayJson = localStorage.getItem(localStorageKey);
  const filmsArrayAll = JSON.parse(filmsArrayJson);
  const partOfFilms = getPartOfFilms(filmsArrayAll, page);
  const totalPage = Math.ceil(filmsArrayAll.length / 20);

  if (!filmsArrayAll) {
    galleryList.innerHTML = '';
    return;
  }

  if (filmsArrayAll.length >= 20) {
    renderPagination(page, totalPage);
  }

  galleryList.innerHTML = createMarkup(partOfFilms);
  setCurrentFilmsData(partOfFilms);
  hidePlaceholder(localStorageKey);
}
