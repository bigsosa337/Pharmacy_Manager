const express = require('express');
const router = express.Router();
const API = require('../controllers/medsAPI');
// const multer = require('multer');

// //multer middleware
// let storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     },
// });

// let upload = multer({
//     storage: storage
// }).single('image');



router.get('/', API.fetchAllmeds);
router.get('/:id', API.fetchMedsById);
router.post('/', API.postMed);
router.put('/:id', API.updateMed);
router.delete('/:id', API.deleteMed);

module.exports = router;