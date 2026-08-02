import express from "express";
import {
  handleCreateUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
} from "../controllers/userFunction.js";

const router = express.Router();

// create user
router.post("/", handleCreateUser);

// get all users
router.get("/", handleGetAllUsers);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

export default router;
