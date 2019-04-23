const path = require('path');
const consumersDir = path.resolve(__dirname, '..', 'consumers');

const consumerFileNames = [
  'fakeWaiter.js'
];

consumerFileNames.forEach((consumer) => {
  const finalPath = path.join(consumersDir, consumer);
  require(finalPath);
});