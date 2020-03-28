const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/incident', controller.incident.list);

router.post('/incident', controller.incident.create);

module.exports = router;