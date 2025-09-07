const User = require("../Models/userSchema");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role: role || "user" });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(501).json({ message: "ERROR CREATING USER" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(501).json({ message: "ERROR FETCHING USERS" });
  } 
};