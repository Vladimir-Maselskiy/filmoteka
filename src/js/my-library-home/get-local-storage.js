export function getLocalStorageWatched() {
  const watched = localStorage.getItem('watched-films');
  return JSON.parse(watched);
}
export function getLocalStorageQueue() {
  const watched = localStorage.getItem('queue-films');
  return JSON.parse(watched);
}
