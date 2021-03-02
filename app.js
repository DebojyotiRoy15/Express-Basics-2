const express = require('express');
const app = express();
const path = require('path');

const main = require('./routes/main');
const users = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(users);
app.use(main);

app.listen(3001);