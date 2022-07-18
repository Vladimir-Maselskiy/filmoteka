import searchFilmByGanre from './search-film-by-ganre';
import randomFilm from './random-film';
import { setResultData } from '../popular-movies/data-result';
import { getModalData } from '../home-modal-js/getModalData';
import { showModal } from '../home-modal-js/showModal';
import { spinnerOff } from '../spinner-js/spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const adviceListEl = document.querySelector('.advice-list');
const modalBackdrop = document.querySelector('.backdrop');

adviceListEl.addEventListener('click', adviceFilmByGanre);

async function adviceFilmByGanre(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  try {
    const ganreId = e.target.dataset.id;
    const filmsrespone = await searchFilmByGanre(ganreId);
    const adviceFilmsArray = filmsrespone.data.results;
    const oneRandomFilm = randomFilm(adviceFilmsArray);
    const randomFilmId = oneRandomFilm.id;
    const filmInformation = await getModalData(randomFilmId);

    showModal(filmInformation);
    spinnerOff();
    setResultData(adviceFilmsArray);
  } catch (erroe) {
    Notify.info('We are sorry but this genre is empty.');
  }
}
