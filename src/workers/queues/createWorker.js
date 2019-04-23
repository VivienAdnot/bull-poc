const queueService = require('./queueService');

function createBullWorker({ name, queueName }) {
  return {
    name,
    queueName,
    enqueue(jobData) {
      const queue = queueService.getOrCreate(queueName);
      const data = { ...jobData, queueName };
      return queue.add(data);
    }
  };
}

module.exports = {
  createBullWorker
};
