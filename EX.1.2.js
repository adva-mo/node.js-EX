// 1. Create a new txt file using the same fs module method we have
// learned before.
// 2. Create a copy of the newly created txt file using a method from
// the fs module.
// 3. Rename one of the files using a method from the fs module.
// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
// 5. Find out and implement another method for the fs module

const fs = require("fs");
const path = require("path");
// fs.writeFileSync("new-file.txt", "");
// fs.copyFile("./new-file.txt", "copy.txt", callback);

function callback(err) {
  if (err) throw err;
  console.log("source.txt was changed");
}
// fs.rename("./copy.txt", "new-copy.txt", callback);
// fs.readdir("../node.js-EX", function (err, files) {
//   if (err) return console.log("error");
//   files.forEach((f) => {
//     console.log(f);
//   });
// });
// console.log(fs.Stats.size("new-copy.txt"));
let stats = fs.statSync("new-copy.txt");
console.log(stats.size);
