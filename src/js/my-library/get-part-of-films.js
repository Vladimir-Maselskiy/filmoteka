export default function getPartOfFilms(AllFilms, page) {
  let newPartOfFilms = [];
  const startIndex = page * 20 - 20;
  const endIndex = startIndex + 20;

  for (let i = startIndex; i < endIndex; i++) {
    if (!AllFilms[i]) {
      break;
    }
    newPartOfFilms.push(AllFilms[i]);
  }
  return newPartOfFilms;
}
