const express = require('express');
const router = express.Router();
const API = require('../controllers/medsAPI');


router.get('/', API.fetchAllmeds);
router.get('/:id', API.fetchMedsById);
router.post('/', API.postMed);
router.put('/:id', API.updateMed);
router.delete('/:id', API.deleteMed);

module.exports = router;