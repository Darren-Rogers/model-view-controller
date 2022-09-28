const router = require('express').Router();

const userRoutes = require('./user-routes');
const chatboardRoutes = require('./chatboard-routes');

router.use('/users', userRoutes);
router.use('/chat', chatboardRoutes);

module.exports = router;
