const { workers } = require('./tasks');
const queueService = require('./queues/queueService');

Object.values(workers).forEach(worker => {
    queueService.getOrCreate(worker.queueName).empty();
    console.log(`Worker ${worker.name} => queue ${worker.queueName}`);
});