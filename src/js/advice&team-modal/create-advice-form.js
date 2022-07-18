import './scroll-advice-list';
import ganresId from './get-ganres-id';

const adviceListEl = document.querySelector('.advice-list');

(async function createSelectBtn() {
  const ganresIds = await ganresId();
  const ganresArray = ganresIds.data.genres;

  const markup = ganresArray
    .map(({ id, name }) => {
      return `<li class="advice-list__item"> <button type="button" class="advice-list__btn" data-id="${id}">${name}</button></li>`;
    })
    .join('');

  adviceListEl.innerHTML = markup;
})();
