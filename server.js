const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Express! ')
}) 

app.listen(3000);
console.log('server on Port 3000')
