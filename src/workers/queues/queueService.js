const Bull = require('bull');

function QueueService() {
  this.queues = [];
}

QueueService.prototype = {
  getOrCreate(name) {
    if (!this.queues[name]) {
      this.queues[name] = new Bull(name);
      return this.queues[name];
    }

    return this.queues[name];
  }
};

module.exports = new QueueService();
