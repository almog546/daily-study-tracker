const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/requireAuth');
const {
    createStudySessions,
} = require('../controllers/studySessionController');

router.post('/', requireAuth, createStudySessions);
module.exports = router;
