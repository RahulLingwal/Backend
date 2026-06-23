const file = require("fs");
const filePath = "./syncfile.txt";

file.writeFileSync(filePath, "Hello Sync");
const result = file.readFileSync(filePath, "utf-8");
console.log(result);

//append
const date = new Date();
const appendPath = "./syncfileAppend.txt";

file.appendFileSync(
  appendPath,
  `${date.getSeconds()} - I am learning nodejs\n`,
);

console.log(file.readFileSync(appendPath, "utf-8"));

//stat
const stats = file.statSync(filePath);
console.log(stats);
