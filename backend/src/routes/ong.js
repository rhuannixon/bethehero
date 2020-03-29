const express = require('express');
const router = express.Router();
const { ong } = require('./../controllers');
const { ongValidation } = require('./validations');

router.get('/ong', ong.list);

router.post('/ong', ongValidation.create, ong.create);

module.exports = router;