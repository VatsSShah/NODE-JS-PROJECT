import express from "express";
import {
  deleteUser,
  getUserById,
  getUser,
  createUser,
  updateUser,
} from "../controllers/User.js";

// Create an instance of the Express router
const router = express.Router();
// GET request - get all users
router.get("/", getUser);

// POST request - create a new user
router.post("/", createUser);

// GET request - get a specific user
router.get("/:id", getUserById);

// DELETE request - delete a specific user
router.delete("/:id", deleteUser);

// PUT request - update a specific user
router.put("/:id", updateUser);

export default router;
  