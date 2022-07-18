
import KeywordSearchFilmServise from './servise-keyword-search-film';

export const keywordSearchFilmServise = new KeywordSearchFilmServise;


export async function getFilm(searchQuery, page) {


    keywordSearchFilmServise.query = searchQuery;

    const res = await keywordSearchFilmServise.getFilm(page);
    const arrayFilms = res.data.results;
    const totalPages = res.data.total_pages;

    return {
        arrayFilms,
        totalPages
    };
   
}
