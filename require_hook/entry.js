const Module = require("module");
const fs = require("fs");

// 函数插桩
//load -> _extensions['.js'] -> _compile
Module._extensions[".js"] = function (module, filename) {
  let content = fs.readFileSync(filename, "utf8");
  if (filename.includes("input")) {
    content = content.replace("卡颂", "卡诗");
  }
  module._compile(content, filename);
};

require("./test.js");
