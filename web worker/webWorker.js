// webWorker.js
onmessage = function (msg) {
  if (Array.isArray(msg.data)) {
    const res = msg.data.reduce((total, cur) => {
      return (total += cur);
    }, 0);
    postMessage(res);
  }
};
