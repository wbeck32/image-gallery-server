/* eslint no-console: "off" */
require('dotenv').config()
const app = require('./src/app');
const connect = require('./lib/connect');
const http = require('http');

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/image-gallery-dev';

connect(dbUri);

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('server running on', server.address());
});
