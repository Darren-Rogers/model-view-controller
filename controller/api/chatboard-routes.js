const router = require('express').Router();
const { Chat } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbChatData = await Chat.findAll({
      include: [
        {
          model: Chat,
          attributes: ['name'],
        },
      ],
    });

    const galleries = dbChatData.map((chat) =>
      chat.get({ plain: true })
    );
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one chat
router.get('/chat/:id', async (req, res) => {
  try {
    const dbChatData = await Chat.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'id',
            'name'          
          ],
        },
      ],
    });

    const chat = dbChatData.get({ plain: true });
    res.render('chat', { chat, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;