const express = require('express');
const router = express.Router();
const API = require('../controllers/medsAPI');
const multer = require('multer');

//multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage
}).single('image');
//----------------------------------------IMPORTANT NOTE-----------------------
//I INITIALLY USED THIS MIDDLEWARE TO UPLOAD PHOTOS FOR THE PATIENTS, BUT IT DOES NOT WORK THAT WELL ON VERSION 3 OF VUE
//BUT IF I DELETE THIS, THEN THE REQUEST BODY WON'T GO TO THE DATABASE, SO IT STAYS HERE 
//BECAUSE EVEN IF I DON'T UPLOAD PICTURES, I STILL NEED MIDDLEWARE FOR UPLOADING DATA


router.get('/', API.fetchAllmeds);
router.get('/:id', API.fetchMedsById);
router.post('/', upload, API.postMed);
router.put('/:id', upload,  API.updateMed);
router.delete('/:id', API.deleteMed);

module.exports = router;