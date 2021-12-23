const { Worker } = require("worker_threads");

module.exports = function (...nums) {
  return new Promise((resolve, reject) => {
    // const calcWorker = new Worker("./nodeWorker.js");
    // calcWorker.postMessage(nums);

    // workerData
    const calcWorker = new Worker("./nodeWorker.js", {
      workerData: nums,
    });

    calcWorker.on("message", resolve);
    calcWorker.on("error", reject);
  });
};
