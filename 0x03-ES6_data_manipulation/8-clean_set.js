export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  return [...set].filter((string) => string.startsWith(startString)).map((string) => string.slice(startString.length)).join('-');
}
