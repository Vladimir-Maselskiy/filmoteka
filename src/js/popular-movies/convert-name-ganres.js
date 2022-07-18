export function convertGanres(allGanres, oneGanres) {
  let ganre = [];
  allGanres.filter(element => {
    if (element.id === oneGanres) {
      ganre.push(element.name);
    }
  });
  return ganre;
}
