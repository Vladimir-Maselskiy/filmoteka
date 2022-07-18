const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');
const watchedPlaceholder = document.querySelector('.js-watched-text');
const queuePlaceholder = document.querySelector('.js-queue-text');

queueBtn.addEventListener('click', delateWatchedAtribbute);
watchedBtn.addEventListener('click', delateQueueAtribbute);

function delateWatchedAtribbute(e) {
  if (e.target.hasAttribute('data-current')) {
    return;
  }
  e.target.setAttribute('data-current', 'currentPage');
  watchedBtn.removeAttribute('data-current');

  watchedPlaceholder.style.display = 'none';
  queuePlaceholder.style.display = 'block';
}

function delateQueueAtribbute(e) {
  if (e.target.hasAttribute('data-current')) {
    return;
  }
  e.target.setAttribute('data-current', 'currentPage');
  queueBtn.removeAttribute('data-current');
  queuePlaceholder.style.display = 'none';
  watchedPlaceholder.style.display = 'block';
}
