const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Tail = require('tail').Tail;

/*
 * Initialize the logram module
 * @params {String} file
 * @params {String} errorFile
 * @params {Number} port
 * @public
 */
let logram = (file, errorFile, port) => {
  server.listen(port);

  app.use(express.static(__dirname + '/public'));

  io.on('connection', function (socket) {
    socket.emit('line', { payload: 'Inititing logram...' });
    console.log(`Inititing logram...'`);
    tail = new Tail(file);
    tail.on('line', function(data) {
      console.log('Watching for logs started');
      socket.emit('line',{ payload : data});
    });

    tail.on('error', function(error) {
      console.log(`Error on watching log, ${error}`);
      socket.emit('line',{ payload : error});
    });

  });
}

module.exports = logram;
