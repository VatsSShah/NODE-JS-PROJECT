import User from "../models/User.js";

// get all users
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// create a user
const createUser = async (req, res) => {
    try {
      const newUser = new User({
        name: req.body.name,
        sapid: req.body.sapid,
        branch: req.body.branch,
      });
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      console.error(`Error creating user: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  // get a specific user
const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(`Error fetching user by ID: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  // update a specific user
const updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        sapid: req.body.sapid,
        branch: req.body.branch,
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(`Error updating user: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // delete a specific user
  const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(`Error deleting user: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export { getUser, createUser, getUserById, updateUser, deleteUser };
  