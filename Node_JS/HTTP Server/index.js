const http = require("http");
const file = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const myUrl = url.parse(req.url, true);

  const log = `${Date.now()}: ${req.url} - New Request receive\n`;

  file.appendFile("./log.txt", log, () => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/contact":
        res.end("Hello from contact us page.");
        break;
      default:
        res.end("404 Page Not Found!");
        break;
    }
  });
  console.log("Request received by the server");
  console.log(req.method);
});

myServer.listen(8000, () => console.log("Server Started!"));
