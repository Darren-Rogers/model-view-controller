const sequelize = require('../config/connection');
const seedChat = require('./chatboard-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedChat();

  await seedUser();

  process.exit(0);
};

seedAll();
