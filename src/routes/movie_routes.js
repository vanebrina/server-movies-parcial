const movieController = require('../contollers/movie_controller');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/posters');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

router.post('/new-movie', upload.array('poster'), movieController.createMovie);


module.exports = router;