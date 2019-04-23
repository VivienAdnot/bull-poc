const _ = require('lodash');
const { createBullWorker } = require('./createWorker');

const workerPathToQueueName = workerPath => workerPath
  .split('/')
  .map(str => str.replace(/([a-z])([A-Z])/g, '$1.$2').toUpperCase())
  .join('.')
  .toLowerCase();

const createWorker = workerConfig => {
  const {
    name,
    path,
    queueName = workerPathToQueueName(path)
  } = workerConfig;

  const options = { name, queueName };
  return createBullWorker(options);
};

function createWorkerService(configs) {
  const workerService = {};

  configs.forEach((conf) => {
    const worker = createWorker(conf);
    _.set(workerService, ['workers', worker.name], worker);
  });

  return workerService;
}

module.exports = {
  createWorkerService
};
