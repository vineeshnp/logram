const logram = require('./src/logram');
const fs = require('fs');

let config = fs.readFileSync( __dirname + '/config.json','UTF-8');
config = JSON.parse(config)
logram(config.logFile, config.errorFile, config.port);
