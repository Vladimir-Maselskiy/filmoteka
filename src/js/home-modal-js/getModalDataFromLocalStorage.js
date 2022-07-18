import { getAdaptiveDataForRender } from './getAdaptiveDataForRender';

export function getModalDataFromLocalStorage(id) {
  const queueFilmsArray = JSON.parse(localStorage.getItem('queue-films'));
  const watchedFilmsArray = JSON.parse(localStorage.getItem('watched-films'));
  let currentMovie = queueFilmsArray.find(item => item.id === Number(id));
  if (!currentMovie) {
    currentMovie = watchedFilmsArray.find(item => item.id === Number(id));
  }
  //   const currentModalData = getAdaptiveDataForRender(currentMovie);
  return getAdaptiveDataForRender(currentMovie);
}
