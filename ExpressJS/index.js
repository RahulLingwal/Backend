const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Hello from Homepage");
});

app.get("/about", (req, res) => {
  res.end(`About me: Name = ${req.query.name}\nAge = ${req.query.age}`);
});

app.listen(8000, () => console.log("Server Started!"));
