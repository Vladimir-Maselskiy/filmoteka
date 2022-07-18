import { genreIds } from '../popular-movies/ganre-ids';

export function getGenreByIds(ids) {
  const genreObj = genreIds.find(element => element.id === Number(ids));
  const genre = genreObj.name;
  return genre;
}
