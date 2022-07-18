import { refs } from '../refs';
import { getBaseURLPath } from './getBaseURLPath';
import { onCloseModal } from './onCloseModal';
import { onDocumentClick } from './onDocumentClick';

export let baseURLPath = '';

getBaseURLPath().then(resp => {
  baseURLPath = resp;

  document.addEventListener('click', onDocumentClick);
  refs.closeModalButtonRef.addEventListener('click', onCloseModal);
});
