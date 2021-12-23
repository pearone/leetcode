const { parentPort, workerData } = require("worker_threads");

// parentPort.on("message", (data) => {
//   const res = data.reduce((total, cur) => {
//     return (total += cur);
//   }, 0);
//   parentPort.postMessage(res);
// });

const data = workerData;
const res = data.reduce((total, cur) => {
  return (total += cur);
}, 0);
parentPort.postMessage(res);
