const { createWorkerService } = require('../queues/workerService');

const tasks = [{
    name: 'FAKE_WAITER',
    path: 'fakeWaiter'
}];

module.exports = createWorkerService(tasks);
