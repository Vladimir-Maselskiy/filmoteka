export default function randomFilm(filmsArray) {
  const MIN_NUMBER = 0;
  const maxNumber = filmsArray.length - 1;
  const randomFilmNumber = Math.round(
    Math.random() * (maxNumber - MIN_NUMBER) + MIN_NUMBER
  );
  return filmsArray[randomFilmNumber];
}
