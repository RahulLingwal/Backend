import mongoose from "mongoose";
import express from "express";

const app = express();

//DB Connection
mongoose
  .connect("mongodb://localhost:27017/user-info")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error : ", err));

//Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

// User.create({
//   username: "Rahul Lingwal",
//   email: "rahul@gmail.com",
//   city: "Dehradun",
//   state: "Uttarakhan",
// });

const port = 5000;
app.use(express.urlencoded({ extended: false }));

app.post("/api/users", async (req, res) => {
  const body = req.body;

  if (!body || !body.username || !body.email || !body.city || !body.state) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  const result = await User.create({
    username: body.username,
    email: body.email,
    city: body.city,
    state: body.state,
  });

  console.log("Result : ", result);

  return res.status(201).json({ msg: "success" });
});

app.get("/api/users", async (req, res) => {
  const allUsers = await User.find({});
  console.log(allUsers);
  return res.json(allUsers);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
