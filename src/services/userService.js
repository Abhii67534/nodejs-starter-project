const userRepo = require('../repositories/userRepository');

exports.getUsers = async () => {
  return await userRepo.getAllUsers();
};

exports.createUser = async (user) => {
  return await userRepo.createUser(user);
};