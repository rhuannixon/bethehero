const express = require('express');
const router = express.Router();
const { ong } = require('./../controllers');

router.get('/ong', ong.list);

router.post('/ong', ong.create);

module.exports = router;