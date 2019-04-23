const queueService = require('./queueService');

const consumeQueue = (queueName, execute) => {

  const bullQueue = queueService.getOrCreate(queueName);

  bullQueue.process((job) => {
    return execute(job);
  });

};

module.exports = consumeQueue;
