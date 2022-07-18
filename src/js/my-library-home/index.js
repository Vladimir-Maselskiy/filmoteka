import { getLocalStorageWatched } from './get-local-storage';
import { requestIds } from './request-ids';
import { createMarkup } from './create-markup';
import {
  setResultDataLibrary,
  clearResultDataLibrary,
} from './data-result-library';
import { refs } from '../refs-el/refs-el';

document.addEventListener('DOMContentLoaded', ready);

async function ready() {
  const ids = getLocalStorageWatched();
  if (ids) {
    refs.libraryEmptyWachEl.style.display = 'none';
    renderIds(ids);
  }
}

export async function renderIds(ids) {
  let markup = '';
  clearResultDataLibrary();
  refs.galleryListEl.innerHTML = '';

  for (let index = 0; index < ids.length; index++) {
    try {
      const response = await requestIds(ids[index]);
      markup += createMarkup(response.data);
      setResultDataLibrary(response.data);
    } catch (error) {}
  }
  refs.galleryListEl.insertAdjacentHTML('afterbegin', markup);
}
