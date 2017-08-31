/* eslint no-console: "off" */
require('dotenv').config()
const app = require('./src/app');
const connect = require('./src/connect');
const http = require('http');
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/image-gallery-dev';
const port = process.env.PORT || 3001;
const server = http.createServer(app);
connect(dbUri);

server.listen(port, () => {
    console.log('server running on', server.address());
});
