const express = require('express');
const router = express.Router();

const { signup, login, me } = require('../controllers/authController');
const { finisedleason } = require('../controllers/lessonController');
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', me);
module.exports = router;
