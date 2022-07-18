let currentFilmsDataList = [];

function setCurrentFilmsData(filmsData) {
  currentFilmsDataList = [...filmsData];
}

function getCurrentFilmsData() {
  return currentFilmsDataList;
}

function clearCurrentFilmsData() {
  currentFilmsDataList = null;
}

export { setCurrentFilmsData, getCurrentFilmsData, clearCurrentFilmsData };
