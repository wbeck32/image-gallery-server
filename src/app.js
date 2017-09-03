require('dotenv').config();
const express = require('express');
var cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');
const app = express();

app.use(cors())

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('../public'));

const images = require('./routes/images');

app.use('/images', images, cors());

module.exports = app;
