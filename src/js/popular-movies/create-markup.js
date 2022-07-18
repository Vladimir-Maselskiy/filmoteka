import hbs from '../../hbs-templates/film-card-home-page.hbs';
import { genreIds } from './ganre-ids';
import { convertGanres } from './convert-name-ganres';
import imgNotFound from '../../images/image-not-found-adaptive.png';

export function createMarkup(results) {
  let markup = '';

  results.forEach(res => {
    const ganres = res.genre_ids
      ? res.genre_ids.map(id => convertGanres(genreIds, id))
      : ['Others'];

    if (ganres.length > 2) {
      ganres.length = 2;
      ganres.push('Others');
    }

    let imgValid = '';

    if (res.poster_path) {
      imgValid = `https://image.tmdb.org/t/p/w300${res.poster_path}`;
    } else if (res.profile_path) {
      imgValid = `https://image.tmdb.org/t/p/w300${res.profile_path}`;
    } else {
      imgValid = imgNotFound;
    }

    const data = {
      filmId: res.id,
      title: res.name || res.title || 'XXXX',
      urlImg: imgValid,
      relisYer: (res.release_date || res.first_air_date || 'XXXX').slice(0, 4),
      ganres: ganres.join(', ') || 'Others',
    };

    markup += hbs(data);
  });

  return markup;
}
