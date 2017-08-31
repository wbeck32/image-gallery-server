require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');
const redirectHttp = require('./redirectHttp')();
const app = express();

// if(process.env.NODE_ENV === 'production') {
//   app.use(redirectHttp)
// }

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('../public'));

const images = require('./routes/images');

app.use('/images', images);

module.exports = app;
