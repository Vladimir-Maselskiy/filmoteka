const openBtn = document.querySelector('.footer__btn');
const closeBtn = document.querySelector('.modal__close-btn');
const modalEl = document.querySelector('.backdrop-team');

openBtn.addEventListener('click', openModal);

function openModal() {
  modalEl.classList.remove('is-hidden');
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', closeModalByEcape);
  modalEl.addEventListener('click', closeModalByBackdrop);
  openBtn.removeEventListener('click', openModal);
}

function closeModal() {
  modalEl.classList.add('is-hidden');
  openBtn.addEventListener('click', openModal);
  closeBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', closeModalByEcape);
  modalEl.removeEventListener('click', closeModalByBackdrop);
}

function closeModalByEcape(e) {
  e.preventDefault();

  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeModalByBackdrop(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  closeModal();
}
