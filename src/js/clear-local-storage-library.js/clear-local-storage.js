// -------------------
const clearBtn = document.querySelector('.clear-library-btn');
const paginationList = document.querySelector('.pagination');
const libraryList = document.querySelector('.gallery-list');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

clearBtn.addEventListener('click', findLocalStorageKey);

function findLocalStorageKey(e) {
  const currentPage = document.querySelector(
    'button[data-current="currentPage"]'
  );
  const lockalStorageKey = currentPage.dataset.key;
  clearLocalStorageAndFilmList(lockalStorageKey);

  if (currentPage.id === 'watched') {
    watchedPlaceholder.style.display = 'block';
  } else {
    queuePlaceholder.style.display = 'block';
  }
}

function clearLocalStorageAndFilmList(lockalStorageKey) {
  localStorage.removeItem(lockalStorageKey);
  libraryList.innerHTML = '';
  paginationList.style.display = 'none';
}
