const express = require('express');
const router = express.Router();

const { getLessons } = require('../controllers/lessonController');
const requireAuth = require('../middlewares/requireAuth');

router.get('/', requireAuth);
module.exports = router;
