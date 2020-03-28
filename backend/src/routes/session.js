const express = require('express');
const router = express.Router();
const { session } = require('../controllers');

router.post('/session', session.login);

module.exports = router;