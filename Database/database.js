import mongoose from "mongoose";

//Connection
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

User.create({
  username: "Rahul Lingwal",
  email: "rahul@gmail.com",
  city: "Dehradun",
  state: "Uttarakhan",
});
