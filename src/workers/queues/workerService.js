const { createBullWorker } = require('./createWorker');

const path = require('path');
const _ = require('lodash');

const workerPathToQueueName = workerPath => {
  return workerPath
    .split('/')
    .map(str => str.replace(/([a-z])([A-Z])/g, '$1.$2').toUpperCase())
    .join('.')
    .toLowerCase();
};

const createWorker = workerConfig => {

  const {
    dir,
    name,
    path: workerPath,
    queueName = workerPathToQueueName(workerPath)
  } = workerConfig;

  const absoluteWorkerPath = path.resolve(dir, workerPath);

  const options = {
    name,
    workerPath: absoluteWorkerPath,
    queueName
  };

  return createBullWorker(options);
};

function createWorkerService(configs, options) {
  const workerService = {};

  configs.forEach((conf) => {
    const worker = createWorker({
      ...conf,
      dir: options.dir
    });

    // pourquoi il y a besoin de ces 3 manières de procéder ?
    _.set(workerService, conf.path.split('/'), worker);
    _.set(workerService, worker.name, worker.name);
    _.set(workerService, ['workers', worker.name], worker);
  });

  return workerService;
}

module.exports = {
  createWorkerService
};
