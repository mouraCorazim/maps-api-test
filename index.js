global.__root = __dirname;

const rl = require('readline');
const http = require('http');
const router = require('./router.js');
const mapsApis = require('./mapsApi/apis.js')
const mapsKey = require('./mapsApi/key.js');
const serverListeners = require('./server/server.js');
const faceListeners = require('./server/interface.js');

const face = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

const server = http.createServer(router);

mapsApis.gmaps(mapsKey.key);
mapsApis.lmaps(mapsKey.key);
serverListeners(server);
faceListeners(face, server);