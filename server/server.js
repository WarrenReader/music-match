const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const app = express();

app.use(bodyParser.json());


app.get('/api/:id', controller.getUser);




var port = 3030;
app.listen(port, () => console.log('Listening'));