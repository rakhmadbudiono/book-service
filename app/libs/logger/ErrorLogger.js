const fs = require('fs');

const availableLogger = {
  fileLogger: function(errorLogPath) {
    return function(errorLogMessage) {
      fs.writeFile(errorLogPath, errorLogMessage, failure => {
        if (failure) {
          // eslint-disable-next-line no-console
          console.log(failure);
        }
      });
    };
  },
  stdoutLogger: function() {
    return function(errorLogMessage) {
      // eslint-disable-next-line no-console
      console.log(errorLogMessage);
    };
  }
};

class ErrorLogger {
  constructor(errorLogPath) {
    if (errorLogPath == null) {
      this._logger = availableLogger.stdoutLogger();
    } else {
      this._logger = availableLogger.fileLogger(errorLogPath);
    }
  }

  log(message) {
    this._logger(message);
  }
}

module.exports = ErrorLogger;
