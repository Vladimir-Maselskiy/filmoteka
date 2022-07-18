import { refs } from './refs-el';
import cardTpl from './card-film.hbs';


export function renderCards(cards) {
    
    const marcup = cards.map(card => cardTpl(card)).join('');
    refs.galleryList.innerHTML = marcup;
}

