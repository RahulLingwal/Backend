const file = require("fs");
const filePath = "./asyncfile.txt";

file.writeFile(filePath, "Hello Async.", () => {});

file.readFile(filePath, "utf-8", (error, result) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log(result);
  }
});

//append
const appendPath = "./asyncfileappend.txt";

file.appendFile(appendPath, "This is aysnc file learning\n", () => {});
file.readFile(appendPath, "utf-8", (error, content) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(content);
  }
});

//stat
console.log(
  file.stat(appendPath, (error, stats) => {
    if (error) {
      console.log("Error: ", error);
    } else {
      console.log(stats);
    }
  }),
);
