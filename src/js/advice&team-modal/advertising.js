const addImageArray = [
  'https://re-media.plektan.com/img/prop/40/7f/407f503405e4ad187970a5873d2756a0.jpg',
  'https://highload.today/wp-content/uploads/2022/02/Kotiku-prihoditsya-iskat-rabotu.-Ne-nado-tak.jpg',
];

const addBlockEl = document.querySelector('.add-block');
const addBlockTime = document.querySelector('.add-block__time');
const addBlockBtn = document.querySelector('.add-block__btn');

(function renderAddImg(addImageArray) {
  const minNumber = 0;
  const maxNumber = addImageArray.length - 1;
  const randomimgIndex = Math.round(
    Math.random() * (maxNumber - minNumber) + minNumber
  );

  const imageEl = `<img
    src="${addImageArray[randomimgIndex]}"
    alt="advertising"
    class="add-block__image"
  />`;

  addBlockEl.insertAdjacentHTML('beforeend', imageEl);
})(addImageArray);

(function deadLineTimer() {
  const startTime = Date.now();
  const finishTime = 11;
  let diferentTimeSec = 0;

  const intervalId = setInterval(() => {
    if (diferentTimeSec === 1) {
      clearInterval(intervalId);

      addBlockTime.classList.add('is-hidden');
      addBlockBtn.classList.remove('is-hidden');

      return;
    }

    const currentTime = Date.now();
    const diferentTimeMs = currentTime - startTime;

    diferentTimeSec = Number(finishTime - (diferentTimeMs / 1000).toFixed());
    addBlockTime.textContent = diferentTimeSec;
  }, 1000);
})();

addBlockBtn.addEventListener('click', () => {
  addBlockEl.classList.add('is-hidden');
});
