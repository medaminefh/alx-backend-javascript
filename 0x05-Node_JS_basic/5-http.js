const http = require('http');
const fs = require('fs').promises;

const countStudents = (path) => fs.readFile(path, 'utf8')
  .then((data) => {
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift(); // Remove header

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

    let response = `Number of students: ${lines.length}\n`;
    fieldMap.forEach((value, key) => {
      response += `Number of students in ${key}: ${value.count}. List: ${value.students.join(', ')}\n`;
    });

    return response.trim();
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(500);
        res.end(error.message);
      });
  }
});

app.listen(1245);

module.exports = app;
