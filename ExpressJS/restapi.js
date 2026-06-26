const express = require("express");
const users = require("./MOCK_DATA.json");
const file = require("fs");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));

//middleware creation
app.use((req, res, next) => {
  console.log("Middleware2");
  next();
});

app.get("/users", (req, res) => {
  const html = `
  <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  <ul/>`;

  return res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) return res.status(404).json({ msg: "404 Not Found!" });
  return res.json(user);
});

app
  .route("/api/users")
  .get((req, res) => {
    res.setHeader("X-myHeader", "Rahul");
    return res.json(users);
  })
  .post((req, res) => {
    const body = req.body;

    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.job
    ) {
      return res.status(400).json({ msg: "All fields are required." });
    }
    users.push({ ...body, id: users.length + 1 });
    file.writeFile("./MOCK_DATA.json", JSON.stringify(users), () => {
      return res.status(201).json({ status: "Success", id: users.length });
    });
    console.log("Body = ", body);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

app.listen(8000, console.log("Server Started!"));
