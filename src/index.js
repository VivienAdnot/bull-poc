const tasks = require('./workers/tasks');

const startJob = ({ job, project }) => {
  if (!tasks.workers[job]) {
    throw new Error('worker.not.found');
  }

  return tasks.workers[job].enqueue({
      project
  });
};

startJob({
  job: 'FAKE_WAITER',
  project: 'test_project'
})
.then((job) => {
  console.log('startJob result', job.data);
});