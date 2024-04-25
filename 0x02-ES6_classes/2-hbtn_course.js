export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a String');
    }
    if (typeof length !== 'number') {
      throw TypeError('length must be a Number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('students must be an Array');
    }
    if (students.some((student) => typeof student !== 'string')) {
      throw TypeError('students must be an Array of Strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a String');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('length must be a Number');
    }
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('students must be an Array');
    }
    if (students.some((student) => typeof student !== 'string')) {
      throw TypeError('students must be an Array of Strings');
    }
    this._students = students;
  }
}
