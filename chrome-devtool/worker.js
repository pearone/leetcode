addEventListener("message", (evt) => {
  let total = 0;
  for (let i = 0; i < evt.data; i++) {
    total += i;
  }
  postMessage(total);
});
