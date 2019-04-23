const Promise = require('bluebird');

const wait = () => {
  return Promise.delay(20000);
};

module.exports = wait;
