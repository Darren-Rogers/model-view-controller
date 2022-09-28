const { User } = require('../models/user');
const userData = [
  {
    name : 'Fun',
    email: 'FunGuy@gmail.com',
    password: 'Funguy',
  },
  {
    name : 'Shohei',
    email: 'Shohei@gmail.com',
    password: 'Shohei',
  },
  {
    name : 'Darren',
    email: 'Darren@gmail.com',
    password: 'Darren',
  },
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;