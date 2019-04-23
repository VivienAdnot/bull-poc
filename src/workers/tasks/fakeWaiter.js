const Promise = require('bluebird');

const wait = (job) => {
  const { data } = job;
  console.log("worker method wait started", data);
  return Promise.delay(5000).then(() => {
    console.log("worker method wait end");
  });
};

module.exports = wait;
