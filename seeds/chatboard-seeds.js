const { Chat } = require('../models/chatboard');
const chatData = [
  {
    title : 'Philly',
    body: 'Its always sunny in philadelphia',
  },
  {
    title : 'Juice Wrld',
    body: 'Cool guy',
  },
  {
    title : 'Apex Legends',
    body: 'New ranked map please',
  }
]
const seedChat = () => Chat.bulkCreate(chatData);

module.exports = seedChat;