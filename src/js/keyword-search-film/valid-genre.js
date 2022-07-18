


export function validGenre (allGanres, oneGanres) {
    let genres = [];
    let ganreValid = '';
    allGanres.filter(elm => {
        if (elm.id === oneGanres) {
            genres.push(elm.name);
        }
    });

    for (const genre  of genres) {
        ganreValid += ` ${genre}`
    }

    return ganreValid;
}