const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the file content into lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Remove the header row
      lines.shift();

      // Initialize a map to count students by field
      const fieldMap = new Map();

      lines.forEach((line) => {
        const [firstName, , , field] = line.split(',');

        if (!fieldMap.has(field)) {
          fieldMap.set(field, { count: 0, students: [] });
        }

        const fieldData = fieldMap.get(field);
        fieldData.count += 1;
        fieldData.students.push(firstName);
        fieldMap.set(field, fieldData);
      });

      // Total number of students
      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their names
      fieldMap.forEach((value, key) => {
        console.log(`Number of students in ${key}: ${value.count}. List: ${value.students.join(', ')}`);
      });
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
