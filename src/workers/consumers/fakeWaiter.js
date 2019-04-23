const consumeQueue = require('../queues/consumeQueue');
const fakeWaiter = require('../tasks/fakeWaiter');

consumeQueue('fake.waiter', fakeWaiter);