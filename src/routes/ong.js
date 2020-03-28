const express = require('express');
const router = express.Router();
const controller = require('./../controllers');

router.get('/ong', controller.ong.list);

router.post('/ong', controller.ong.create);

module.exports = router;