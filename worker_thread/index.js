// libuv

const runCalcWorker = require("./runCalcWorker.js");

(async function () {
  const res = await runCalcWorker(2, 3, 3, 3);
  console.log(res);
})();
