const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: 'password1',
  },
  {
    username: 'jane_doe',
    email: 'jane.doe@example.com',
    password: 'password2',
  },
  {
    username: 'mike_smith',
    email: 'mike.smith@example.com',
    password: 'password3',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;