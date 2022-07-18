import { getResultData } from '../popular-movies/data-result';
import { getAdaptiveDataForRender } from './getAdaptiveDataForRender';

export function getCurrentModalDataFromLocalArray(id) {
  const result = getResultData();
  const currentMovie = result.find(element => element.id === Number(id));

  if (!currentMovie) {
    return;
  }

  return getAdaptiveDataForRender(currentMovie);
}
