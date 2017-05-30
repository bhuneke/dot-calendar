const express = require('express');
const app = express();
const morgan = require('morgan')('dev');
const cors = require('cors');

app.use(cors);
app.use(morgan);

app.use(express.static('public'));

module.exports = app;