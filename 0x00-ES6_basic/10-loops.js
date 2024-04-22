export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const elem of array) {
    result.push(appendString + elem);
  }

  return result;
}
