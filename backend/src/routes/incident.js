const express = require('express');
const router = express.Router();
const { incident } = require('../controllers');

router.delete('/incident/:id', incident.remove);
router.get('/incident', incident.list);
router.get('/incident/ong', incident.listByOngId);
router.post('/incident', incident.create);

module.exports = router;