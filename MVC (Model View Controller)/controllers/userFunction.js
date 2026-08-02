import { User } from "../models/userModel.js";

async function handleCreateUser(req, res) {
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
}

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.json(allUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ msg: "user not found." });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { city: "Rishikesh" });
  return res.json({ status: "success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

export {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
