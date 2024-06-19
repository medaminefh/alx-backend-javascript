const express = require('express');
const fs = require('fs').promises;

const app = express();

const countStudents = (path) => {
  return fs.readFile(path, 'utf8')
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      lines.shift(); // Remove header
      
      const fieldMap = new Map();
      
      lines.forEach(line => {
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
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(data => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
});

app.listen(1245);

module.exports = app;