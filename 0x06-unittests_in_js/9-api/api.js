const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(404).send('Error: ID must be a number');
    } else {
    res.send(`Payment methods for cart ${id}`);
    }
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});