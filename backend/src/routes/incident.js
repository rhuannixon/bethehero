const express = require('express');
const router = express.Router();
const { incident } = require('../controllers');
const { incidentValidation } = require('./validations');

router.delete('/incident/:id', incident.remove);
router.get('/incident', incident.list);
router.get('/incident/ong', incidentValidation.incidentOng, incident.listByOngId);
router.post('/incident', incident.create);

module.exports = router;