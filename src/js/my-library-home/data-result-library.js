const result = [];
export function setResultDataLibrary(data) {
  result.push(data);
}

export function getResultDataLibrary() {
  return result;
}

export function clearResultDataLibrary() {
  if (!result == []) {
    result.splice(0, result.length);
  }
}
