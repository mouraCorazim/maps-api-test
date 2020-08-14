global.__root = __dirname;

const rl = require('readline');
const http = require('http');

const router = require('./config/router.js'); 
const serverListeners = require('./config/server.js');
const faceListeners = require('./config/interface.js');

const { key } = require('./api/maps/key.js');
const maps = require('./api/maps/gmaps.js');

const face = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

const server = http.createServer(router);

maps(key);
serverListeners(server);
faceListeners(face, server);