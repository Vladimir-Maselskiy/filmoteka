const result = [];
export function setResultData(data) {
  data.forEach(element => {
    result.push(element);
  });
}

export function getResultData() {
  return result;
}

export function clearResultData() {
  if (!result == []) {
    result.splice(0, result.length);
  }
}
