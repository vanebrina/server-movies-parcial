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
router.get("/", movieController.listMovie);
router.get("/:id", movieController.getMovie);
router.patch("/edit/:id", upload.array('poster'), movieController.editMovie);
router.delete("/delete/:id", movieController.deleteMovie);


module.exports = router;