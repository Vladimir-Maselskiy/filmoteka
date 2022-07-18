import hbs from '../../hbs-templates/film-card-library.hbs';

export function createMarkup(res) {
  let markup = '';

  const data = {
    filmId: res.id,
    title: res.name || res.title || 'XXXX',
    urlImg: res.poster_path,
    relisYer: (res.release_date || res.first_air_date || 'XXXX').slice(0, 4),
    ganres: res.genres?.map(id => id.name).join(', ') || 'XXXX',
    ratting: res.vote_average || 0,
  };

  markup += hbs(data);
  return markup;
}
