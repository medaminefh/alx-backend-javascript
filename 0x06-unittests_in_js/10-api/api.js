const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

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

app.get('/available_payments', (req, res) => {
    res.json({"credit_cards": true, "paypal": false});
});

app.post('/login', (req, res) => {
    const {username} = req.body;
    console.log(req.body);
    res.status(200).send(`Welcome ${username}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});