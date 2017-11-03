const logram = require('./src/logram');
const fs = require('fs');

class logramClass{
  
  /**
   * Checks if the file is existing
   * @param {String} file
   * @returns {Boolean}
   */
  static isExisting(file) {
    return fs.existsSync(file);
  }

  /**
   * Run the logram module
   * @param {String} config
   * @public
   */
  static run(configFile) {
    let config = JSON.parse(JSON.stringify(configFile));
    if(!this.isExisting(config.logFile)){
      console.log(` ${config.logFile} is not available, please check if the log file is available in the location`);
      return;
    }

    if(!this.isExisting(config.errorFile)){
      logram(config.logFile, null, config.port);
    }else{
      logram(config.logFile, config.errorFile, config.port);
    }
  }
}

module.exports = logramClass;
