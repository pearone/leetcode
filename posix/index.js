const fs = require("fs");

fs.mkdir("./aaa", { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
});

const childProcess = require("child_process");

// childProcess.fork("aaa/c.js");

// childProcess.execFile("echo", ["www.baidu.com"], (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(stdout);
// });
childProcess.exec('"node aaa/c.js" arg1 arg2');
childProcess.spawn("ls", ["-lh", "/usr"]);
