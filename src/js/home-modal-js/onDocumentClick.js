import { getResultData } from '../popular-movies/data-result';
import { spinnerOff, spinnerOn } from '../spinner-js/spinner';
import { getCardElement } from './getCardElement';
import { getCurrentModalDataFromLocalArray } from './getCurrentModalDataFromLocalArray';
import { getModalData } from './getModalData';
import { getModalDataFromLocalStorage } from './getModalDataFromLocalStorage';
import { showModal } from './showModal';

export function onDocumentClick(event) {
  if (
    event.target.classList.contains(
      'remove-film-svg' || event.target.classList.contains('remove-film-btn')
    )
  ) {
    return;
  }
  const elementRef = getCardElement(event);
  if (elementRef.hasAttribute('data-filmid')) {
    const id = elementRef.dataset.filmid;

    // нова логіка отримання даних для модального вікна (без завантаження даних з сервера)
    const currentModalData = getCurrentModalDataFromLocalArray(id);
    if (currentModalData) {
      showModal(currentModalData);
    } else {
      // spinnerOn();
      // console.log('dataIsNotInArray');
      // getModalData(id).then(resp => {
      //   showModal(resp);
      //   spinnerOff();
      // });
      showModal(getModalDataFromLocalStorage(id));
    }
  }
}
