import { refs } from '../refs';

window.onload = function () {
  setTimeout(function () {
    refs.backdropSpinnerRef.classList.add('is-hidden');
  }, 1000);
};

export function spinnerOff() {
  refs.backdropSpinnerRef.classList.add('is-hidden');
}

export function spinnerOn() {
  refs.backdropSpinnerRef.classList.remove('is-hidden');
}
