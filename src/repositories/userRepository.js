const users = []; // In-memory store for now

exports.getAllUsers = async () => {
  return users;
};

exports.createUser = async (user) => {
  users.push(user);
  return user;
};