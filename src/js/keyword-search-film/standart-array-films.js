import {genreIds} from './ganre-ids';
import { validGenre } from './valid-genre';
import imgNotFound from '../../images/image-not-found-adaptive.png';

export function standartindArrayFilms(films) {
    return films.map(({ id, original_title, title, genre_ids, poster_path, backdrop_path, release_date }) => {
            
        let baseUrl = 'https://image.tmdb.org/t/p/w500';
        const ganresArray = genre_ids.map(id => validGenre(genreIds, id));

        if (!poster_path && !backdrop_path) {
            baseUrl = imgNotFound;
            poster_path = '';
            backdrop_path = '';
        }

        return {
            filmId: id,
            urlImg: `${baseUrl}${poster_path || backdrop_path}`,
            title: original_title || title,
            ganres: ganresArray.length >= 3 ? `${ganresArray[0]}, ${ganresArray[1]}, Other` : ganresArray.join(', ') || 'Film',   
            relisYer: (release_date || 'XXXX').slice(0, 4)
        }
    })
}