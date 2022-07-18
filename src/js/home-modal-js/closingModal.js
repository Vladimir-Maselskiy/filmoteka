import { refs } from '../refs';
import { onCloseModal } from './onCloseModal';

export function onKeyDown(event) {
  event.preventDefault();
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

export function onBackDropClick(event) {
  if (event.target === refs.modalBackdropRef) {
    onCloseModal();
  }
}
