const { createWorkerService } = require('../queues/workerService.js');

const tasks = [{
    name: 'FAKE_WAITER',
    path: 'fakeWaiter'
}];

// locate root folder of the registered jobs => allows for flexible folder architecture
module.exports = createWorkerService(tasks, {
    dir: __dirname
});
