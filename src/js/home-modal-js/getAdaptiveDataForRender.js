import { getBaseURLPath } from './getBaseURLPath';
import { getGenreByIds } from './getGenreByIds';
import { baseURLPath } from './homeModalJS';
import defaultIMG from '../../images/image-not-found-adaptive.png';
import { getModalData } from './getModalData';

let absolut_poster_path = '';
let genre = '';
let originalTitle;

export function getAdaptiveDataForRender(currentMovie) {
  const {
    id,
    poster_path,
    profile_path,
    backdrop_path,
    title,
    overview = 'missing',
    genre_ids,
    popularity = 'missing',
    vote_average = 'missing',
    vote_count = 'missing',
    original_name,
    name,
  } = currentMovie;

  if (poster_path && poster_path.length > 20) {
    absolut_poster_path = baseURLPath + poster_path;
  } else if (backdrop_path) {
    absolut_poster_path = baseURLPath + backdrop_path;
  } else if (profile_path) {
    absolut_poster_path = baseURLPath + profile_path;
  } else {
    absolut_poster_path = defaultIMG;
  }

  if (!genre_ids || genre_ids.length === 0) {
    genre = 'missing';
  } else {
    genre = getGenreByIds(genre_ids[0]);
  }

  if (title) {
    originalTitle = title;
  } else if (original_name) {
    originalTitle = original_name;
  } else if (name) {
    originalTitle = name;
  } else {
    originalTitle = 'missing';
  }

  const currentModalData = {
    id: id,
    absolut_poster_path: absolut_poster_path,
    genre: genre,
    original_title: originalTitle,
    original_title_to_UpperCase: originalTitle.toUpperCase(),
    popularity_to_Fixed: popularity.toFixed(1),
    vote_average: vote_average,
    vote_count: vote_count,
    overview: overview,
  };
  return currentModalData;
}
