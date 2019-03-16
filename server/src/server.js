const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const RESPONSE_TIMEOUT = 500;

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.status(200).send('REST API for testing');
});

app.get('/person/:input', (req, res) => {       
    setTimeout(() => {
        res.status(200).send({
            val1: Math.floor(Math.random() * 255),
            val2: Math.floor(Math.random() * 255),
        });
    }, RESPONSE_TIMEOUT);
});

app.get('/facility/:valueOne', (req, res) => {
    setTimeout(() => {
        res.status(200).send({
            val3: Math.floor(Math.random() * 255),
            val4: Math.floor(Math.random() * 255),
        });
    }, RESPONSE_TIMEOUT);
});

app.get('/exposure/:valueTwo', (req, res) => {       
    setTimeout(() => {
        res.status(200).send({
            val5: Math.floor(Math.random() * 255),
        });
    }, RESPONSE_TIMEOUT);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});
