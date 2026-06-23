const file = require("fs");
const filePath = "./orginal.txt";

file.writeFileSync(filePath, "Hello This is file.");
console.log(file.readFileSync(filePath, "utf-8"));

if (!file.existsSync("./copy.txt")) {
  file.cpSync(filePath, "./copy.txt");
  console.log("Origninal.txt copied to copy.txt");
}
console.log("Copied File: ", file.readFileSync("./copy.txt", "utf-8"));

// file.unlinkSync("./copy.txt");
