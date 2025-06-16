const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

exports.createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  res.status(201).json(newUser);
};