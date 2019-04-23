const queueService = require('./queueService');

function createBullWorker({ name, queueName, concurrency, workerPath }) {
  return {
    name,
    queueName,

    enqueue(jobData) {
      const data = {
        ...jobData,
        queueName,
        workerPath
      };

      const queue = queueService.getOrCreate(queueName);
      return queue.add(data);
    }
  };
}

module.exports = {
  createBullWorker
};
