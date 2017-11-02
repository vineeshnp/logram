const logram = require('./src/logram');

class logramClass{
  verifyConfig() {

  }

  /**
   * Run the logram module
   * @param {File} config
   * @public
   */
  static run(configFile) {
    let config = JSON.parse(configFile);
    logram(config.logFile, config.errorFile, config.port);
  }
}

module.exports = logramClass;
