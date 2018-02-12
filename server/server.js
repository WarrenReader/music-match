const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const app = express();

app.use(bodyParser.json());


app.get('/api/:id', controller.getUser);
app.put('/api/update', controller.updateUser);
app.post('/api/create-user', controller.createUser);
app.delete('/api/delete-user/:id/:name', controller.deleteUser);



var port = 3030;
app.listen(port, () => console.log('Listening'));