export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
    return null;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(size) {
    this._size = size;
  }

  set location(location) {
    this._location = location;
  }
}
