import { refs } from '../refs';
import { onBackDropClick, onKeyDown } from './closingModal';

export function onCloseModal() {
  refs.modalBackdropRef.classList.add('is-hidden');
  refs.bodyRef.classList.remove('modal-open');
  const modalRef = document.querySelector('.modal__box .modal');
  modalRef.remove();
  document.removeEventListener('click', onBackDropClick);
  window.removeEventListener('keydown', onKeyDown);
}
