const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/requireAuth');
const {
    createStudySessions,
    updateStudySession,
} = require('../controllers/studySessionController');

router.post('/', requireAuth, createStudySessions);
router.put('/', requireAuth, updateStudySession);

module.exports = router;
