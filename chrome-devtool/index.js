// chrome-remote-interface

// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --remote-debugging-port=9222
// node index.js

// https://leeon.gitbooks.io/devtools/content/learn_basic/overview.html
// chrome://inspect

const CDP = require("chrome-remote-interface");
const fs = require("fs");

async function test() {
  try {
    const client = await CDP();
    const { Page, DOM, Debugger } = client;
    console.log(Page);

    await Page.enable();
    await Page.navigate({
      url: "www.baidu.com",
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await Page.captureScreenshot();
    fs.writeFileSync("./screenshot.jpg", res.data, {
      encoding: "base64",
    });
  } catch (err) {
    console.log(err);
  }
}
test();
