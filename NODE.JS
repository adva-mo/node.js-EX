//! node.js is java script on the server side, uses v8 engaine
// that way we bind js with c++ (v8 is written in c++) and can execute some complex proccess
//* process is an object in node.js
//* global is an object that refers to the node global enviromnet
// process and global are not recognized on the browser

//* node is none blocking i/o model, means it can run several process at a time
// with required we can load files and etc..

//! json - a metjod that convert js to json. takes object array or any value
import fs from "fs";

const book = {
  title: "some",
  author: "some",
};
const bookJson = JSON.stringify(book);
console.log(bookJson);

console.log(JSON.parse(bookJson));
fs.writeFileSync("new.json", bookJson);

//! the node debugger is using the built in v8 debugger tool, that means chrome is the only way on the browser to inspect our program
