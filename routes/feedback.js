const express = require('express');
const router = express.Router();
const { emailFeedback } = require('../controllers/feedback');

router.post('/feedback', emailFeedback);

module.exports = router;
