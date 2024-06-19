import fs from 'fs/promises';

export function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '' && !line.startsWith('firstname'));
      const studentsPerField = {};

      lines.forEach((line) => {
        const [firstName, , , field] = line.split(',');
        if (!studentsPerField[field]) {
          studentsPerField[field] = [];
        }
        studentsPerField[field].push(firstName);
      });

      return studentsPerField;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
