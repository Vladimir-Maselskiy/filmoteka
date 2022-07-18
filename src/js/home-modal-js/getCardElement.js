export function getCardElement(event) {
  let cardElement = event.target;

  while (
    !cardElement.hasAttribute('data-filmid') &&
    cardElement.nodeName !== 'BODY'
  ) {
    cardElement = cardElement.parentElement;
  }
  return cardElement;
}
